import React from "react";
import Task from "./components/Task";
import { useTheme } from "./Providers/Providers";

function App() {
  const { themeStyle } = useTheme()
  return (
    <div className="App" style={{ background: themeStyle.background }}>
      <div className="pacman-route">
        <div className="pacman"></div>
      </div>
      <Task />
    </div>
  )
}

export default App;
