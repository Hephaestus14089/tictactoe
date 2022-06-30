// import { useState } from 'react';

const Square = ({ occupant, onClick }) => {
 // const [occupant, setOccupant] = useState(value);

  return (
    <button
      className="square"
      onClick={() => { onClick(); }}
    >
      {occupant}
    </button>
  );
}

export default Square;
