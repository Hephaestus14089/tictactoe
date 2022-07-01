import './App.css';
import Board from './components/Board';

const style = {
  'marginTop': "15%",
  'display': "flex",
  'justifyContent': "center",
  'alignItems': "center"
};

function App() {
  return (
    <div
      className="App"
      style={style}
    >
      <Board />
    </div>
  );
}

export default App;
