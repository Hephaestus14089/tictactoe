import { useState } from 'react';
import Square from './Square';



const Board = (i) => {

  const [state, setState] = useState(Array(9).fill(null));

  const renderSquare = (i) => {
    return <Square
             occupant={state[i - 1]}
             key={i}
             onClick={() => {
               let newState = [...state];
               newState[i - 1] = "X";
               setState(newState);
             }}
           />
  };

  const createBoard = () => {
    let rows = [];
    let row = [];

    for (let i = 1; i <= 9; i++) {
      row.push(renderSquare(i));

      if (i % 3 === 0) {
        rows.push(
          <div
            className="row"
            key={i}
          >
            {row}
          </div>
        );

        row = [];
      }
    } // end of for loop

    return (
      <div className="board">
        {rows}
      </div>
    );
  };

  const board = createBoard();
  return board;
};

export default Board;
