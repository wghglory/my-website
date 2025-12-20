import {useRef, useState} from 'react';
import {FaCheck, FaCopy} from 'react-icons/fa';

export default function Pre({children, ...props}: React.HTMLAttributes<HTMLPreElement>) {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const copyToClipboard = async () => {
    if (!preRef.current) return;

    try {
      // Extract text content from the code element
      const codeElement = preRef.current.querySelector('code');
      let text = '';

      if (codeElement) {
        // Get all code lines
        const codeLines = codeElement.querySelectorAll('.code-line');

        if (codeLines.length > 0) {
          // Extract text from each code line, removing line numbers
          const lines: string[] = [];
          codeLines.forEach((lineEl) => {
            // Clone to avoid modifying original
            const clone = lineEl.cloneNode(true) as HTMLElement;
            // Remove line number
            clone.querySelectorAll('.line-number').forEach((el) => el.remove());
            // Get text content and trim any existing newlines (code-line elements might have them)
            const lineText = (clone.textContent || clone.innerText || '').replace(/\r?\n/g, '');
            // Preserve the line (including empty lines from original code)
            lines.push(lineText);
          });

          text = lines.join('\n');
        } else {
          // Fallback: extract directly from code element
          const clone = codeElement.cloneNode(true) as HTMLElement;
          clone.querySelectorAll('.line-number').forEach((el) => el.remove());
          text = clone.textContent || clone.innerText || '';
        }
      } else {
        // Fallback: extract from pre element
        text = preRef.current.textContent || preRef.current.innerText || '';
      }

      // If no text found, return early
      if (!text || text.trim().length === 0) {
        console.warn('No text content found to copy');
        return;
      }

      // Process the text: normalize indentation (tabs to 2 spaces)
      // Preserve empty lines but remove trailing whitespace from non-empty lines
      const lines = text.split(/\r?\n/).map((line) => {
        // If line is empty, preserve it as-is
        if (line.trim().length === 0) {
          return '';
        }
        // Remove trailing whitespace from non-empty lines
        const trimmed = line.replace(/[ \t]+$/, '');
        // Normalize indentation: convert tabs to 2 spaces
        const match = trimmed.match(/^(\s*)/);
        if (match) {
          const leadingWhitespace = match[1];
          const normalizedIndent = leadingWhitespace.replace(/\t/g, '  ');
          const content = trimmed.slice(leadingWhitespace.length);
          return normalizedIndent + content;
        }
        return trimmed;
      });

      // Join lines with single newlines
      const finalText = lines.join('\n');

      // Ensure we have text to copy
      if (!finalText || finalText.trim().length === 0) {
        console.warn('Processed text is empty');
        return;
      }

      // Copy to clipboard
      await navigator.clipboard.writeText(finalText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      if (err instanceof Error && err.name === 'NotAllowedError') {
        console.error('Clipboard permission denied');
      }
    }
  };

  return (
    <div className="group relative">
      <pre ref={preRef} {...props}>
        {children}
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute right-2 top-2 z-10 rounded border border-gray-300 bg-white/90 px-2 py-1.5 text-xs opacity-0 shadow-sm transition-opacity hover:bg-gray-50 focus:opacity-100 focus:outline-none group-hover:opacity-100 dark:border-gray-600 dark:bg-gray-800/90 dark:hover:bg-gray-700"
        aria-label="Copy code"
        title="Copy code"
      >
        {copied ? (
          <span className="flex items-center gap-1 text-green-600 dark:text-green-400">
            <FaCheck className="h-3 w-3" />
            Copied
          </span>
        ) : (
          <FaCopy className="h-3 w-3 text-gray-600 dark:text-gray-400" />
        )}
      </button>
    </div>
  );
}
