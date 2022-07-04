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

  const checkWin = (i) => {

    const matchOccupant = (i, j) => state[j] !== state[i]

    const verticalMatch = (i) => {

      let j = i;
      while (j >= 3) {
        j -= 3;
        if (!matchOccupant(i, j))
          return false;
      }

      j = i;
      while (j <= 5) {
        j += 3;
        if (!matchOccupant(i, j))
          return false;
      }

      return true;
    }; // end of verticalMatch()

    const horizontalMatch = (i) => {

      if (i % 3 === 0) {
        if (matchOccupant(i, i + 1) && matchOccupant(i, i + 2))
          return true;
      }
      else if (i % 2 !== 0) {
        if (matchOccupant(i, i - 1) && matchOccupant(i, i + 1))
          return true;
      }
      else {
        if (matchOccupant(i, i - 1) && matchOccupant(i, i - 2))
          return true;
      }

      return false;
    }; // end of horizontalMatch()

    if (verticalMatch(i) && horizontalMatch(i))
      setWinner(state[i]);
  };

  const updateValues = (i) => {
    setMoveCount(moveCount + 1);
    console.log(`mc: ${moveCount}`); // debug output
    // modifying the state of the array representing the board
    let newState = [...state];
    newState[i - 1] = nextPlayer;
    setState(newState);
    // resetting next player
    setNextPlayer(nextPlayer === 'X' ? 'O' : 'X');
  };

  const handleSquareClick = (i) => { // async: await checkWin()
    // updating the values required for match status updation
    updateValues(i);

    // updating status of match
    if (moveCount > 4) {
      console.log("reached!"); // debug output
      checkWin(i);

      if (winner !== null)
        setIsMatchEnd(true);
      else if (moveCount === 9)
        setIsMatchEnd(true);
    }

  };

  const renderSquare = (i) => {
    return (
      <Square
        key={i}
        occupant={state[i - 1]}
        isMatchEnd={isMatchEnd}
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
