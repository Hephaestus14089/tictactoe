export default function FeatureButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        'height': "40px",
        'width': "100px",
        'fontSize': "15px",
        'cursor': "pointer"
      }}
    >
      {text}
    </button>
  );
}
