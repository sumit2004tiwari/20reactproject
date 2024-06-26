import { useState } from "react";
import "./App.css";
import Gituserapi from "./component/Gituserapi";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Gituserapi/>
    </>
  );
}

export default App;
