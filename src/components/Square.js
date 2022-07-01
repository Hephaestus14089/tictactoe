const style = {
  'display': "inline-block",
  'verticalAlign': "middle",
  'height': "100px",
  'width': "100px",
  'backgroundColor': "#fff",
  'border': "3px solid",
  'borderColor': "#000",
  'margin': "0",
  'padding': "0",
  'fontSize': "80px",
  'color': "#000",
  'textAlign': "center"
};

const Square = (props) => {

  return (
    <p
      className="square"
      style={style}
      onClick={() => { if (props.occupant === null) props.onClick(); }}
    >
      {props.occupant}
    </p>
  );
};

export default Square;
