import FocusTrap from 'focus-trap-react';
import {useEffect} from 'react';

import ClientOnlyPortal from './ClientOnlyPortal';

export default function AppModal({
  header = 'Modal Title',
  children,
  footer,
  isOpen,
  setIsOpen,
}: {
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  // Escape
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
        event.stopPropagation();
      }
    }

    document.addEventListener('keyup', handleEscape);
    return () => {
      document.removeEventListener('keyup', handleEscape);
    };
  }, [setIsOpen]);

  // disable scroll when opening modal
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ClientOnlyPortal selector="#modal-portal">
      {/* overlay  */}
      <div className="fixed inset-0 z-40 bg-gray-900 bg-opacity-50 dark:bg-opacity-80"></div>
      <FocusTrap>
        {/* container */}
        <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-start justify-center overflow-hidden">
          {/* modal */}
          <section
            className="relative z-50 my-16 flex max-h-[calc(100%-8rem)] w-full max-w-xs flex-col rounded bg-gray-100 shadow outline-2 outline-offset-2 outline-transparent dark:bg-gray-800 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl"
            role="dialog"
            aria-modal="true"
          >
            <header className="basis-0 py-4 px-6 text-xl">{header}</header>
            <button
              aria-label="Close"
              className="absolute top-2 right-3 flex h-10 w-10 items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              <svg viewBox="0 0 24 24" focusable="false" className="h-4 w-4" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
                ></path>
              </svg>
            </button>
            {/* body */}
            <div className="flex-1 overflow-auto py-2 px-6">{children}</div>
            {/* footer */}
            <footer className="flex items-center justify-end gap-4 px-6 py-4">{footer}</footer>
          </section>
        </div>
      </FocusTrap>
    </ClientOnlyPortal>
  );
}
