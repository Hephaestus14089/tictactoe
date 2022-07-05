const UpperTray = () => {
  /*
   * TODO:
   * - dark/light mode
   */
};

const MidRightTray = (props) => {

  const { moves, starter, nextPlayer, isMatchEnd, winner } = props;

  let movesX = 0;
  let movesO = 0;

  if (moves % 2 === 0) {
    movesX = Math.trunc(moves / 2);
    movesO = movesX;
  }
  else {
    if (starter === 'X') {
      movesO = moves / 2 - 0.5;
      movesX = movesO + 1;
    }
    else {
      movesX = moves / 2 - 0.5;
      movesO = movesX + 1;
    }
  } // end of outer if-else

  let status = `Next Player: ${nextPlayer}`;
  if (isMatchEnd)
    status = (winner !== null) ? `Match Winner: ${winner}` : "Match Draw"

  return (
    <div
      className="midRightTray"
      style={{
        'marginLeft': "60px",
        'padding': "14px 40px",
        'border': "3px dotted #000"
      }}
    >
      <div className="moves">
        <h1><u>Moves</u></h1>
        <h2>Total: {moves}</h2>
        <h2>X: {movesX}</h2>
        <h2>O: {movesO}</h2>
      </div>
      <div
        className="status"
        style={{
          'paddingTop': "0px",
          'borderTop': "3px dotted #000"
        }}
      >
        <h2>{status}</h2>
      </div>
    </div>
  );
};

const LowerTray = () => {
  /*
   * TODO:
   * - new match
   */
};

export { UpperTray, LowerTray, MidRightTray };
