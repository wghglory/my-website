import {useState} from 'react';

import AppModal from './AppModal';

export default function AppModalTest() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex h-full w-full justify-center py-12">
        <button
          role="button"
          aria-label="open modal"
          className="mx-auto rounded bg-indigo-700 px-4 py-2 text-xs text-white transition duration-150 ease-in-out hover:bg-indigo-600 focus:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2 sm:px-8 sm:text-sm"
          onClick={() => setIsOpen(true)}
        >
          Open Modal
        </button>
      </div>

      <AppModal
        header={'Hello'}
        footer={
          <>
            <button className="rounded-xl border-2 border-white px-6 py-2 text-center text-blue-500 shadow-md transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
              See features
            </button>

            <button
              className="rounded-xl bg-blue-600 px-6 py-2 text-center text-white transition duration-500 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </>
        }
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <p>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam
          incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse
          quis.
        </p>
        <p>
          Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat
          elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod
          Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod
          pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam
        </p>
      </AppModal>
    </>
  );
}
