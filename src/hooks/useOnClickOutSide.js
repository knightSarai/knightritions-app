import { useEffect } from 'react';

export const useOnClickOutside = (open, ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!open || !ref.current || ref.current.contains(event.target)) {
        return;
      }
      event.stopPropagation();
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
  [open, ref, handler],
  );
};