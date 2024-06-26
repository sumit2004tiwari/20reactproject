import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState();
  const [charAllowed, setCharAllowed] = useState();
  const [password, setPasssword] = useState();

  const passwordGenerator = useCallback(() => {
    console.log("iam_sumitTiwari");
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvqxyz";
    let number = "0123456789";
    let char = "~!@#$%^&*()_+}{";

    if (numberAllowed) str += number;
    if (charAllowed) str += char;
    for (let i = 0; i <= length; i++) {
      let char1 = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char1);
    }
    setPasssword(pass);
  }, [length, numberAllowed, charAllowed]);
  passwordGenerator();

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, setPasssword]);

  return (
    <>
      <h1>Password Generator</h1>
      <br />
      <input type="text" value={password} />
    </>
  );
}

export default App;
