import { useState, useEffect } from 'react';

const useThemeDetector = () => {

  // media query
  const mq = window.matchMedia("(prefers-color-scheme: dark)");

  const [ theme, setTheme ] = useState(mq.matches ? 'dark' : 'light');

  const themeListener = e => {
    setTheme(
      e.matches
        ? 'dark'
        : 'light'
    );
  };

  useEffect(() => {
    mq.addListener(themeListener);
    return () => { mq.removeListener(themeListener); };
  }, []);

  return [ theme, setTheme ];
};

export default useThemeDetector;
