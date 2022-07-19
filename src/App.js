import Board from './components/Board';
import { useState, useEffect } from 'react';
import { ThemeContext } from './Context';
import useThemeDetector from './customHooks/useThemeDetector';

const themes = {
  'light': {
    'bgColor': "#fff",
    'fgColor': "#000"
  },
  'dark': {
    'bgColor': "#282c34",
    'fgColor': "#61dafb"
  }
};

function App() {

  const [ theme, setTheme ] = useThemeDetector();
  const [ bgColor, setBgColor ] = useState(themes[theme]['bgColor']);
  const [ fgColor, setFgColor ] = useState(themes[theme]['fgColor']);

  const toogleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const adjustColors = () => {
    if (theme === 'dark') {
      setBgColor(themes['dark']['bgColor']);
      setFgColor(themes['dark']['fgColor']);
    }
    else {
      setBgColor(themes['light']['bgColor']);
      setFgColor(themes['light']['fgColor']);
    }
  };

 useEffect(() => {
   adjustColors();
 }, [theme]);

  const style = {
    'height': "100vh",
    'display': "flex",
    'justifyContent': "center",
    'alignItems': "center",
    'backgroundColor': bgColor,
    'color': fgColor
  };


  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      <div
        className="App"
        style={style}
      >
        <Board />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
