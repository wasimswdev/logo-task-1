import "./styles.css";
import { useState, useEffect } from "react";
import video from "./images/logo.mp4";

export default function App() {
  const [positions, setPositions] = useState({
    leftPosition: "50",
    topPosition: "50",
  });

  const handleMouseActivity = (e) => {
    console.log(e);
    const canvas = document.getElementById("canvas");
    let rect = canvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    console.log(typeof x, y);
    setPositions({
      leftPosition: String(x),
      topPosition: String(y),
    });
  };

  return (
    <div id="canvas" className="App" onMouseMove={handleMouseActivity}>
      <video
        style={{
          position: "absolute",
          left: `${positions.leftPosition}px`,
          top: `${positions.topPosition}px`,
        }}
        src={video}
        width="200"
        height="200"
      />
    </div>
  );
}
