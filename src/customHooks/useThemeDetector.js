import { useState, useEffect } from 'react';

const useThemeDetector = () => {

  // media query
  const mq = window.matchMedia("(prefers-color-scheme: dark)");

  const getSysTheme = () =>
      mq.matches
        ? 'dark'
        : 'light'
  ;

  const themeListener = e => {
    setTheme(
      e.matches
        ? 'dark'
        : 'light'
    );
  };

  const [ theme, setTheme ] = useState(getSysTheme());

  useEffect(() => {
    mq.addListener(themeListener);
    return () => { mq.removeListener(themeListener); };
  }, []);

  return theme;
};

export default useThemeDetector;
