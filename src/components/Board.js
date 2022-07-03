import { useState } from 'react';
import Square from './Square';
import { MidRightTray } from './Trays';

const Board = (i) => {

  const startingPlayer = 'X';
  const [state, setState] = useState(Array(9).fill(null));
  const [nextPlayer, setNextPlayer] = useState(startingPlayer);
  const [moveCount, setMoveCount] = useState(0);
  const [isMatchEnd, setIsMatchEnd] = useState(false);

  const renderSquare = (i) => {
    return <Square
             occupant={state[i - 1]}
             key={i}
             onClick={() => {
               let newState = [...state];
               newState[i - 1] = nextPlayer;
               setNextPlayer(nextPlayer === 'X' ? 'O' : 'X');
               setMoveCount(moveCount + 1);
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
            style={{ 'margin': "0", 'padding': "0" }}
          >
            {row}
          </div>
        );

        row = [];
      }
    } // end of for loop


    return (
      <div
        className="board"
        style={{ 'margin': "0", 'padding': "0" }}
      >
        {rows}
      </div>
    );
  };

  const board = createBoard();
  return (
    <>
      {board}
      <MidRightTray
        moves={moveCount}
        starter={startingPlayer}
        matchEnd={isMatchEnd}
      />
    </>
  );
};

export default Board;
