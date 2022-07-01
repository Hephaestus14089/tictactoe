// import { useState } from 'react';
// import './Square.css';
const style = {
  'height': "100px",
  'width': "100px",
  'background-color': "#fff",
  'border': "3px solid",
  'border-color': "#000"
};

const Square = (props) => {
 // const [occupant, setOccupant] = useState(value);

  return (
    <button
      className="square"
      style={style}
      onClick={() => { props.onClick(); }}
    >
      {props.occupant}
    </button>
  );
};

export default Square;
