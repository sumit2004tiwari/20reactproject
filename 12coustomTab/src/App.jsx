import { useState } from "react";
import "./App.css";
import './Components/style.css'
import TabContent from "./Components/TabContent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <TabContent/>
    </>
  );
}

export default App;
