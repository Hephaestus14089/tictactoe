import Board from './components/Board';
import { useState } from 'react';
import { ThemeContext } from './Context';

function App() {

  const [ theme, setTheme ] = useState('light');
  const [ bgColor, setBgColor ] = useState('#fff');
  const [ fgColor, setFgColor ] = useState('#000');

  const toogleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      setBgColor('#282c34');
      setFgColor('#61dafb');
    }
    else {
      setTheme('light');
      setBgColor('#fff');
      setFgColor('#000');
    }
  };

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
