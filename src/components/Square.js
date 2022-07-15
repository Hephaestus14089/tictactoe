import { useContext } from 'react';
import { MatchContext } from '../Context';
import { ThemeContext } from '../Context';

const Square = (props) => {

  const { isMatchEnd } = useContext(MatchContext);
  const { bgColor, fgColor } = useContext(ThemeContext);

  const isClickable = () => {
    if (!isMatchEnd && props.occupant === null)
      return true;
    return false;
  };

  const cursor = isClickable() ? "pointer" : "default";

  const style = {
    'display': "inline-block",
    'verticalAlign': "middle",
    'height': "100px",
    'width': "100px",
    'backgroundColor': bgColor,
    'border': "3px solid",
    'borderColor': fgColor,
    'margin': "0",
    'padding': "0",
    'fontSize': "80px",
    'color': fgColor,
    'textAlign': "center",
    'cursor': cursor
  };

  return (
    <p
      className="square"
      style={style}
      onClick={() => { if (isClickable()) props.onClick(); }}
    >
      {props.occupant}
    </p>
  );
};

export default Square;
