import "../css/hats.css";

export function FirstHat() {
    
  const hatTopPart = {
    width: "20px",
    height: "20px",
    backgroundColor: "white",
    borderTopLeftRadius: "7px",
    borderTopRightRadius: "7px",
    backgroundImage: "linear-gradient(140deg, var(--verants-main-color) 40%, transparent 40%, transparent 60%, var(--verants-main-color) 60%)",
  };

  const hatBottomPart = {
    width: "40px",
    height: "3px",
    backgroundColor: "var(--verants-main-color)",
  };

  return (
    <div className="hats-hat-main-container">
      <div style={hatTopPart}></div>
      <div style={hatBottomPart}></div>
    </div>
  );
}
