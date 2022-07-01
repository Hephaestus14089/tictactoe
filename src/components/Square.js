const style = {
  'display': "inline-block",
  'vertical-align': "middle",
  'height': "100px",
  'width': "100px",
  'background-color': "#fff",
  'border': "3px solid",
  'border-color': "#000",
  'margin': "0",
  'padding': "0",
  'font-size': "80px",
  'color': "#000",
  'text-align': "center"
};

const Square = (props) => {

  return (
    <p
      className="square"
      style={style}
      onClick={() => { if (props.occupant === " ") props.onClick(); }}
    >
      {props.occupant}
    </p>
  );
};

export default Square;
