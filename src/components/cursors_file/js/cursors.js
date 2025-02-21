import "../css/cursors.css";

export function FirstCursor(props) {
    const firstCursorOne = {
        width: "20px",
        height: "2px",
        backgroundColor: "white",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    }

    const firstCursorTwo = {
        ...firstCursorOne,
        transform: "rotateZ(90deg) translate(-1px, 10px)"
    }

    return (
        <div className="cursors-cursor-main-container">
            <div style={firstCursorOne}></div>
            <div style={firstCursorTwo}></div>
        </div>
    );
}
