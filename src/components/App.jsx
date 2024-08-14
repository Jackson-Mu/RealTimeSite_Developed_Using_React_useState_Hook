import React, { useState } from "react";

function App() {
  setInterval(CurrentrealTime, 60);
  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function CurrentrealTime() {
    const newNow = new Date().toLocaleTimeString();
    setTime(newNow);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={CurrentrealTime}>Experience real Time Site</button>
    </div>
  );
}

export default App;
