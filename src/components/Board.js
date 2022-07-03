import { useState } from 'react';
import Square from './Square';
import { MidRightTray } from './Trays';

const Board = () => {

  const startingPlayer = 'X';

  const [state, setState] = useState(Array(9).fill(null));
  const [nextPlayer, setNextPlayer] = useState(startingPlayer);
  const [moveCount, setMoveCount] = useState(0);
  const [isMatchEnd, setIsMatchEnd] = useState(false);
  const [winner, setWinner] = useState(null);

 // const checkWin = (i) => {
 //
 // };

  const handleSquareClick = (i) => {
    setMoveCount(moveCount + 1);
    // modifying the state of the array representing the board
    let newState = [...state];
    newState[i - 1] = nextPlayer;
    setState(newState);
    // resetting next player
    setNextPlayer(nextPlayer === 'X' ? 'O' : 'X');

    // updating status of match
    if (moveCount > 4) {
      // checkWin(i);

      if (winner !== null)
        setIsMatchEnd(true);
      else if (moveCount === 9)
        setIsMatchEnd(true);
    }

  };

  const renderSquare = (i) => {
    return (
      <Square
        occupant={state[i - 1]}
        key={i}
        onClick={() => {handleSquareClick(i);}}
      />
    );
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
        winner={winner}
      />
    </>
  );
};

export default Board;
