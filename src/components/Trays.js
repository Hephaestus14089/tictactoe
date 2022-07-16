import { useContext } from 'react';
import { MatchContext, ThemeContext } from '../Context';
import FeatureButton from './FeatureButton';

const RightTray = ({ newMatch, startingPlayer }) => {

  const { movesX, movesO, nextPlayer, isMatchEnd, winner } = useContext(MatchContext);
  const movesTotal = movesX + movesO;

  const { fgColor } = useContext(ThemeContext);

  const getStatus = () => {
    if (isMatchEnd)
      return (winner !== null) ? `Match Winner: ${winner}` : "Match Draw";
    return `Next Player: ${nextPlayer}`;
  };

  const status = getStatus();

  return (
    <div
      className="rightTray"
      style={{
        'marginLeft': "60px",
        'display': "flex",
        'flexDirection': "column",
        'alignItems': "center"
      }}
    >
      <div
        className="scoreBoard"
        style={{
          'padding': "14px 40px",
          'borderColor': fgColor,
          'border': "3px dotted"
        }}
      >
        <div className="moves">
          <h1><u>Moves</u></h1>
          <h2>Total: {movesTotal}</h2>
          <h2>X: {movesX}</h2>
          <h2>O: {movesO}</h2>
        </div>
        <div
          className="status"
          style={{
            'paddingTop': "0px",
            'borderColor': fgColor,
            'borderTop': "3px dotted"
          }}
        >
          <h2>{status}</h2>
        </div>
      </div>
      <div
        className="newMatch"
        style={{ 'marginTop': "15px" }}
      >
        <FeatureButton
          text={"New Match"}
          onClick={newMatch}
        />
      </div>
    </div>
  );
};

export default RightTray;
