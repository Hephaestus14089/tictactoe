const UpperTray = () => {
  /*
   * TODO:
   * - dark/light mode
   */
};

const MidRightTray = ({ moves, starter, isMatchEnd, winner }) => {
  /*
   * TODO:
   * - Next Player / Winner / Draw
   */

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

  const status = "";

  return (
    <div
      className="midRightTray"
      style={{
        'marginLeft': "60px",
        'padding': "25px 40px",
        'border': "3px dotted #000"
      }}
    >
      <div className="moves">
        <h1><u>Moves</u></h1>
        <h2>Total: {moves}</h2>
        <h2>X: {movesX}</h2>
        <h2>O: {movesO}</h2>
      </div>
      <div className="status">
        <p>{status}</p>
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
