const style = {
  'height': "100px",
  'width': "100px",
  'background-color': "#fff",
  'border': "3px solid",
  'border-color': "#000",
  'margin': "0",
  'padding': "0"
};

const Square = (props) => {

  return (
    <button
      className="square"
      style={style}
      onClick={() => { if (props.occupant === " ") props.onClick(); }}
    >
      {props.occupant}
    </button>
  );
};

export default Square;
