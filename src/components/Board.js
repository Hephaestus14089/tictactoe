import { useState, useEffect, useContext } from 'react';
import Square from './Square';
import RightTray from './Trays';
import { MatchContext, ThemeContext } from '../Context';

const Board = () => {

  const startingPlayer = 'X';

  const [state, setState] = useState(Array(9).fill(null));
  const [prevIndex, setPrevIndex] = useState(null);
  const [nextPlayer, setNextPlayer] = useState(startingPlayer);
  const [moveCount, setMoveCount] = useState(0);
  const [movesX, setMovesX] = useState(0);
  const [movesO, setMovesO] = useState(0);
  const [isMatchEnd, setIsMatchEnd] = useState(false);
  const [winner, setWinner] = useState(null);

  const { theme, toogleTheme } = useContext(ThemeContext);

  const newMatch = () => {
    setState(Array(9).fill(null));
    setPrevIndex(null);
    setNextPlayer(startingPlayer);
    setMoveCount(0);
    setMovesX(0);
    setMovesO(0);
    setIsMatchEnd(false);
    setWinner(null);
  };

  const checkWin = (i) => {

    const matchOccupants = (i, j) => state[j] === state[i]

    const winSets = [
      [ // index 0
        [1, 2], // horizontal win
        [3, 6], // vertical win
        [4, 8]  // diagonal win
      ],
      [ // index 1
        [0, 2], // horizontal win
        [4, 7]  // vertical win
      ],
      [ // index 2
        [0, 1], // horizontal win
        [5, 8], // vertical win
        [4, 6]  // diagonal win
      ],
      [ // index 3
        [4, 5], // horizontal win
        [0, 6], // vertical win
      ],
      [ // index 4
        [3, 5], // horizontal win
        [1, 7], // vertical win
        [0, 8], // diagonal win
        [2, 6]  // diagonal win
      ],
      [ // index 5
        [3, 4], // horizontal win
        [2, 8]  // vertical win
      ],
      [ // index 6
        [7, 8], // horizontal win
        [0, 3], // vertical win
        [4, 2]  // diagonal win
      ],
      [ // index 7
        [6, 8], // horizontal win
        [1, 4]  // vertical win
      ],
      [ // index 8
        [6, 7], // horizontal win
        [2, 5], // vertical win
        [0, 4]  // diagonal win
      ]
    ];

    let flag = false;

    winSets[i].forEach(pos => {
        if (!flag)
          flag = matchOccupants(i, pos[0]) && matchOccupants(i, pos[1]);
    });

    if (flag)
      setWinner(state[i]);
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
  }, [moveCount, winner]);

  const handleSquareClick = (i) => {
    // updating the values required for match status updation
    setMoveCount(moveCount + 1);
    if (nextPlayer === 'X')
      setMovesX(movesX + 1);
    else
      setMovesO(movesO + 1);
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
        className="leftTray"
        style={{
          'display': "flex",
          'flexDirection': "column",
          'alignItems': "center"
        }}
      >
        <div
          className="board"
          style={{ 'margin': "0", 'padding': "0" }}
        >
          {rows}
        </div>
        <div
          className="toogleTheme"
          style={{ 'marginTop': "15px" }}
        >
          <button
            onClick={toogleTheme}
            style={{
              'height': "40px",
              'width': "100px",
              'fontSize': "15px"
            }}
          >
            Dark Mode
          </button>
        </div>
      </div>
    );
  };

  const board = createBoard();
  return (
    <>
      <MatchContext.Provider
        value={{
          state,
          prevIndex,
          nextPlayer,
          movesX,
          movesO,
          isMatchEnd,
          winner
        }}
      >
        {board}
        <RightTray
          newMatch={newMatch}
        />
      </MatchContext.Provider>
    </>
  );
};

export default Board;
