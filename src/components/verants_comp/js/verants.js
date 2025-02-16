import "../css/verants.css";

function Verants(props) {
  return (
    <div style={{ scale: props.scale }} className="verants-icon-main-container">
      <div className="verants-icon"></div>
      <div className="verants-inner-color"></div>
      <span className="verants-icon-inner-v">V</span>
    </div>
  );
}

export default Verants;
