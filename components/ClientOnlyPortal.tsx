// https://github.com/vercel/next.js/blob/canary/examples/with-portals/components/ClientOnlyPortal.js
import {useEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';

export default function ClientOnlyPortal({children, selector}: {children: React.ReactNode; selector: string}) {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
}
