/**
 * Custom Turbopack loader that converts SVG files to React components
 * This is a modern alternative to @svgr/webpack that works natively with Turbopack
 *
 * Converts SVG files to React components that can be used like:
 * import Icon from './icon.svg';
 * <Icon className="..." />
 */
module.exports = function (content) {
  this.cacheable?.();

  // Get SVG content as string
  let svgContent = content.toString().trim();

  // Remove XML declaration if present
  svgContent = svgContent.replace(/<\?xml[^>]*\?>/g, '');

  // Escape the SVG content for use in JSX template literal
  const escapedSvg = svgContent
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\${/g, '\\${')
    .replace(/\$/g, '\\$');

  // Create a React component that renders the SVG
  // Using template literal to preserve the SVG structure
  const componentCode = `import React from 'react';

function SvgComponent(props) {
  const svgString = \`${escapedSvg}\`;

  // Parse the SVG string to extract attributes and content
  const svgMatch = svgString.match(/<svg([^>]*)>([\\s\\S]*)<\\/svg>/);
  if (!svgMatch) {
    return null;
  }

  const [, attrsString, innerHTML] = svgMatch;

  // Parse attributes - handle whitespace and various formats
  const attrs = {};
  // Improved regex to handle whitespace and various attribute formats
  // Match: attribute name (with optional namespace like xml:), =, quoted value
  // Handle multiline attributes and various whitespace patterns
  const attrRegex = /([a-zA-Z_][a-zA-Z0-9_:-]*)\s*=\s*["']([^"']*)["']/g;
  let match;
  while ((match = attrRegex.exec(attrsString)) !== null) {
    const key = match[1].trim();
    const value = match[2];

    // Convert kebab-case to camelCase for React props
    // Special handling for xml: attributes - convert xml:space to xmlSpace
    // Special handling for data-* attributes - keep them lowercase (React requirement)
    let camelKey = key;
    if (key.startsWith('data-')) {
      // Keep data-* attributes as lowercase (e.g., data-name stays as 'data-name')
      camelKey = key;
    } else if (key.startsWith('xml:')) {
      // Convert xml:space to xmlSpace, xml:lang to xmlLang, etc.
      camelKey = key.replace(/^xml:(.+)$/, (_, rest) => {
        return 'xml' + rest.charAt(0).toUpperCase() + rest.slice(1);
      });
    } else {
      camelKey = key.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    }

    // Special handling for style attribute - convert string to object
    if (key === 'style' && value && value.trim()) {
      const styleObj = {};
      value.split(';').forEach((rule) => {
        const trimmedRule = rule.trim();
        if (trimmedRule) {
          const colonIndex = trimmedRule.indexOf(':');
          if (colonIndex > 0) {
            const prop = trimmedRule.substring(0, colonIndex).trim();
            const val = trimmedRule.substring(colonIndex + 1).trim();
            if (prop && val) {
              // Convert kebab-case to camelCase for CSS properties
              // But preserve vendor prefixes and special properties like enable-background
              const camelProp = prop.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
              styleObj[camelProp] = val;
            }
          }
        }
      });
      attrs.style = styleObj;
    } else if (key !== 'style') {
      attrs[camelKey] = value;
    }
  }

  // Merge with props (props take precedence)
  const finalAttrs = { ...attrs };

  // Handle style prop - ensure it's always an object
  if (props.style) {
    // If props.style is an object, use it; if it's a string, parse it
    if (typeof props.style === 'string') {
      const styleObj = {};
      props.style.split(';').forEach((rule) => {
        const [prop, val] = rule.split(':').map((s) => s.trim());
        if (prop && val) {
          const camelProp = prop.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
          styleObj[camelProp] = val;
        }
      });
      finalAttrs.style = attrs.style ? { ...attrs.style, ...styleObj } : styleObj;
    } else {
      finalAttrs.style = attrs.style ? { ...attrs.style, ...props.style } : props.style;
    }
  } else if (attrs.style) {
    finalAttrs.style = attrs.style;
  }

  // Merge other props (excluding style which we handled above)
  Object.keys(props).forEach((key) => {
    if (key !== 'style') {
      finalAttrs[key] = props[key];
    }
  });

  // Remove className/class conflict - use className from props if provided
  if (finalAttrs.className && finalAttrs.class) {
    delete finalAttrs.class;
  }

  // Final safety check - ensure style is never a string
  if (finalAttrs.style && typeof finalAttrs.style === 'string') {
    const styleObj = {};
    finalAttrs.style.split(';').forEach((rule) => {
      const trimmedRule = rule.trim();
      if (trimmedRule) {
        const colonIndex = trimmedRule.indexOf(':');
        if (colonIndex > 0) {
          const prop = trimmedRule.substring(0, colonIndex).trim();
          const val = trimmedRule.substring(colonIndex + 1).trim();
          if (prop && val) {
            const camelProp = prop.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
            styleObj[camelProp] = val;
          }
        }
      }
    });
    finalAttrs.style = styleObj;
  }

  return React.createElement('svg', {
    ...finalAttrs,
    dangerouslySetInnerHTML: { __html: innerHTML }
  });
}

export default SvgComponent;
`;

  return componentCode;
};
