import Board from './components/Board';
import { useState } from 'react';
import { ThemeContext } from './Context';

const style = {
  'paddingTop': "8%",
  'display': "flex",
  'justifyContent': "center",
  'alignItems': "center"
};

function App() {

  const [ theme, setTheme ] = useState('light');

  const toogleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
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
