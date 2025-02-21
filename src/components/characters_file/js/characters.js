import "../css/characters.css";

export function FirstCharacterCircle(props) {
  const characterEye = {
    width: "5px",
    height: "2px",
    backgroundColor: "black",
  };

  const characterEyes = {
    top: "14px",
    gap: "10px",
  };

  const characterMouth = {
    width: "10px",
    height: "2px",
    backgroundColor: "black",
    top: "25px",
    left: "50%",
    transform: "translateX(-50%)",
  };

  const characterEyebrows = {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    top: "10px",
    gap: "6px",
    left: "50%",
    transform: "translateX(-50%)",
  };

  const characterEyebrowValues = {
    width: "7px",
    height: "2px",
    backgroundColor: "black",
  };
  const characterEyebrowOne = {
    ...characterEyebrowValues,
  };
  const characterEyebrowTwo = {
    ...characterEyebrowValues,
    transform: "rotate(-14deg)",
  };

  const innerCharacterBodyDiv = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    fontWeight: "bold",
    left: "5px",
  }

  const innerCharacterBodySpan = {
    fontSize: "14px",
    position: "relative",
    top: "-5px", 
    color: "var(--verants-main-color)",
  }

  return (
    <div className="character-main-container">
      <div className="character-hat">{props.hat}</div>
      <div className="character-head">
        <div style={characterEyebrows} className="character-eyebrows">
          <div style={characterEyebrowOne} className="character-eyebrow"></div>
          <div style={characterEyebrowTwo} className="character-eyebrow"></div>
        </div>
        <div style={characterEyes} className="character-eyes">
          <div style={characterEye}></div>
          <div style={characterEye}></div>
        </div>
        <div style={characterMouth} className="character-mouth"></div>
        <div className="character-glasses">{props.glasses}</div>
      </div>
      <div className="character-body">
        <div style={innerCharacterBodyDiv}>1<span style={innerCharacterBodySpan}>st</span></div>
      </div>
    </div>
  );
}
