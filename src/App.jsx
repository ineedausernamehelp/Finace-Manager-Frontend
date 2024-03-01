import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState();
  return (
    <div className="bob">
      <input type="text" onChange={(e) =>setColor(e.target.value)} />
      <Todo naam="Boter" />
      <Todo naam="Kaas" />
      <Todo naam="En" />
      <Todo naam="Eiren"/>

    </div>
  );
}

export default App;
