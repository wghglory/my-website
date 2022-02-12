import {useTheme} from 'next-themes';
import {useEffect, useState} from 'react';

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const {resolvedTheme, theme, systemTheme, setTheme} = useTheme();

  // Avoid Hydration Mismatch. When mounted on client, now we can show the UI
  // https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      {resolvedTheme === 'light' ? (
        <button onClick={() => setTheme('dark')} aria-label="Set dark theme">
          {/* Sun */}
          <svg className="group h-10 w-10" viewBox="0 0 56 56" fill="none">
            <circle
              cx="28"
              cy="28"
              r="27"
              fillOpacity={0.1}
              className="fill-transparent stroke-gray-300 group-hover:fill-yellow-500 group-hover:stroke-yellow-500"
              strokeWidth="2"
            />
            <g className="fill-gray-900 group-hover:fill-yellow-500">
              <path d="M28 24.2713C28.7384 24.2713 29.4602 24.4903 30.0742 24.9005C30.6881 25.3107 31.1666 25.8938 31.4492 26.576C31.7317 27.2582 31.8057 28.0088 31.6616 28.733C31.5176 29.4572 31.162 30.1224 30.6399 30.6445C30.1178 31.1666 29.4526 31.5222 28.7284 31.6663C28.0042 31.8103 27.2535 31.7364 26.5713 31.4538C25.8892 31.1712 25.3061 30.6927 24.8959 30.0788C24.4857 29.4648 24.2667 28.743 24.2667 28.0047C24.2679 27.0149 24.6617 26.066 25.3615 25.3662C26.0614 24.6663 27.0103 24.2726 28 24.2713ZM28 22.4047C26.8925 22.4047 25.8097 22.7331 24.8888 23.3484C23.9679 23.9638 23.2502 24.8384 22.8263 25.8616C22.4025 26.8849 22.2916 28.0109 22.5076 29.0972C22.7237 30.1835 23.2571 31.1813 24.0402 31.9645C24.8234 32.7476 25.8212 33.281 26.9075 33.4971C27.9938 33.7131 29.1198 33.6022 30.1431 33.1784C31.1663 32.7545 32.0409 32.0368 32.6563 31.1159C33.2716 30.1949 33.6 29.1122 33.6 28.0047C33.6 26.5194 33.01 25.0951 31.9598 24.0449C30.9096 22.9947 29.4852 22.4047 28 22.4047Z" />
              <path d="M18.1011 19.4255L19.4208 18.1048L22.6931 21.3771L21.3733 22.6968L18.1011 19.4255Z" />
              <path d="M14.9333 27.0713H19.6V28.938H14.9333V27.0713Z" />
              <path d="M18.1011 36.5839L21.3733 33.3116L22.6931 34.6323L19.4208 37.9036L18.1011 36.5839Z" />
              <path d="M27.0667 36.4047H28.9333V41.0713H27.0667V36.4047Z" />
              <path d="M33.3079 34.6323L34.6276 33.3116L37.8999 36.5839L36.5801 37.9036L33.3079 34.6323Z" />
              <path d="M36.4 27.0713H41.0667V28.938H36.4V27.0713Z" />
              <path d="M33.3079 21.3771L36.5801 18.1048L37.8999 19.4255L34.6276 22.6968L33.3079 21.3771Z" />
              <path d="M27.0667 14.938H28.9333V19.6047H27.0667V14.938Z" />
            </g>
          </svg>
        </button>
      ) : (
        <button onClick={() => setTheme('light')} aria-label="Set light theme">
          {/* Moon */}
          <svg className="group h-10 w-10" viewBox="0 0 56 56" fill="none">
            <circle
              cx="28"
              cy="28"
              r="27"
              fillOpacity={0.3}
              className="fill-transparent stroke-gray-600 group-hover:fill-sky-500 group-hover:stroke-sky-500"
              strokeWidth="2"
            />
            <path
              d="M25.4074 14C20.2222 14 14 19.1852 14 27.4815C14 35.7778 20.2222 42 28.5185 42C36.8148 42 42 35.7778 42 30.5926C30.5926 37.8519 18.1481 25.4074 25.4074 14Z"
              className="stroke-current group-hover:stroke-sky-500"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ThemeChanger;
