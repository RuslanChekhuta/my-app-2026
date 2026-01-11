import { useState } from "react";

export default function MouseTracker() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [text, setText] = useState("");

  const handleMouseMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    setCoords({ x: offsetX, y: offsetY });
  };

  const handleKeyUp = (e) => {
    console.log("Нажата клавиша:", e.key);
    if (e.key === "Escape") {
      setText("");
    }
  };

  return (
    <div className="tracker-area" onMouseMove={handleMouseMove}>
      <div className="info-panel">
        Mouse: {coords.x} / {coords.y}
      </div>
      <input
        className="tracker-input"
        placeholder="Печатай тут... (Esc для очистки)"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
}
