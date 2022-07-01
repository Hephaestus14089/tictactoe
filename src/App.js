import './App.css';
import Board from './components/Board';

const style = {
  'margin-top': "15%",
  'display': "flex",
  'justify-content': "center",
  'align-items': "center"
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
