// Refer content/snippets/aspect-ratio.mdx
// Refer https://htmldom.dev/show-a-loading-indicator-when-an-iframe-is-being-loaded/

import {useEffect, useRef} from 'react';
import {FaSpinner} from 'react-icons/fa';

export default function CodeFrame({src, title = 'code demo'}: {src: string; title?: string}) {
  const loadingRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!!iframeRef.current && !!loadingRef.current) {
      iframeRef.current.addEventListener('load', () => {
        // Hide the loading indicator
        loadingRef.current!.style.display = 'none';

        // Bring the iframe back
        iframeRef.current!.style.opacity = '1';
      });
    }
  }, []);

  return (
    <div className="relative my-16 h-0 max-w-full overflow-hidden pb-[56.25%]">
      {/* Can further make a animated svg loading icon */}
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center" ref={loadingRef}>
        Loading Code Editor
        <FaSpinner className="ml-4 animate-spin" />
      </div>

      <iframe
        ref={iframeRef}
        style={{opacity: 1}}
        src={src}
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        allow="accelerometer; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; xr-spatial-tracking"
        title={title}
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
