import { useState, useEffect } from 'react';
import Square from './Square';
import { MidRightTray } from './Trays';

const Board = () => {

  const startingPlayer = 'X';

  const [state, setState] = useState(Array(9).fill(null));
  const [prevIndex, setPrevIndex] = useState(null);
  const [nextPlayer, setNextPlayer] = useState(startingPlayer);
  const [moveCount, setMoveCount] = useState(0);
  const [isMatchEnd, setIsMatchEnd] = useState(false);
  const [winner, setWinner] = useState(null);

  const checkWin = (i) => {

    const matchOccupants = (i, j) => state[j] === state[i]

    const verticalMatch = (i) => {

      let j = i;
      while (j >= 3) {
        j -= 3;
        if (!matchOccupants(i, j))
          return false;
      }

      j = i;
      while (j <= 5) {
        j += 3;
        if (!matchOccupants(i, j))
          return false;
      }

      return true;
    }; // end of verticalMatch()

    const horizontalMatch = (i) => {
      if (i % 3 === 0)
        return (matchOccupants(i, i + 1) && matchOccupants(i, i + 2))
      else if (i % 2 !== 0)
        return (matchOccupants(i, i - 1) && matchOccupants(i, i + 1))
      else
        return (matchOccupants(i, i - 1) && matchOccupants(i, i - 2))
    }; // end of horizontalMatch()

    const diagonalMatch = (i) => {
      let flag = false;

      [ // list of diagonal winning positions
        [0, 4, 8],
        [2, 4, 6]
      ]
        .forEach(winPos => {
          if (!flag && (winPos.find(index => index === i) !== undefined))
            flag = matchOccupants(winPos[0], winPos[1]) && matchOccupants(winPos[0], winPos[2]);
        });

      return flag;
    };

    if (verticalMatch(i) || horizontalMatch(i) || diagonalMatch(i)) setWinner(state[i]);
  };

  useEffect(() => {
     // updating status of match
    if (moveCount > 4) {
      checkWin(prevIndex);

      if (winner !== null)
        setIsMatchEnd(true);
      else if (moveCount === 9)
        setIsMatchEnd(true);
    }
  }, [moveCount, prevIndex, winner]);

  const handleSquareClick = (i) => {
    // updating the values required for match status updation
    setMoveCount(moveCount + 1);
    // modifying the state of the array representing the board
    let newState = [...state];
    newState[i] = nextPlayer;
    setState(newState);
    // resetting next player
    setNextPlayer(nextPlayer === 'X' ? 'O' : 'X');
    // resetting previous index
    setPrevIndex(i);
  };

  const renderSquare = (i) => {
    return (
      <Square
        key={i}
        occupant={state[i]}
        isMatchEnd={isMatchEnd}
        onClick={() => {handleSquareClick(i);}}
      />
    );
  };

  const createBoard = () => {
    let rows = [];
    let row = [];

    for (let i = 1; i <= 9; i++) {
      row.push(renderSquare(i - 1));

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
        isMatchEnd={isMatchEnd}
        winner={winner}
      />
    </>
  );
};

export default Board;
