import Board from './components/Board';
import { useState } from 'react';
import { ThemeContext } from './Context';

function App() {

  const [ theme, setTheme ] = useState('light');

  const toogleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const bgColor = (theme === 'dark') ? 'black' : '#fff';

  const style = {
    'paddingTop': "8%",
    'display': "flex",
    'justifyContent': "center",
    'alignItems': "center",
    'backgroundColor': bgColor
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
