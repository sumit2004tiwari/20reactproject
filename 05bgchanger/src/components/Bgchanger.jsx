import { useState } from "react";

function Bgchanger() {
  const [color, setColor] = useState("#000000");
  const [typeofColor, setTypeOfColor] = useState("hex");
  const [rgb , setRgb] = useState("");
   
  function handleRgbColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.floor(Math.random() * 256));
    let b = Math.floor(Math.floor(Math.random() * 256));
    let rgb = `rgb(${r} , ${g} , ${b})`;
    setRgb(rgb)
    console.log(rgb);
    setColor(rgb);
  }

  function handleHexColor() {
    let hexDigit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hexDigit[Math.floor(Math.random() * hexDigit.length)]
      
    }
    setColor(hexColor);
    setTypeOfColor(hexColor);
    console.log(hexColor);
    setRgb(hexColor)
  }
  return (
    <>
      <div
        style={{
          height: "85vh",
          width: "80vw",
          backgroundColor: color,
        }}
      >
        <div>
          <button className="text-3xl text-red-500  bg-gray-400 rounded-xl p-3 m-2 mb-12 ">
            background Color Picker
          </button><br />

          <button className="bg-black-400 text-5xl text-white-500 " >{rgb} </button>
        </div>
        <div className='"flex justify-center items-end fixed bottom-0 w-[78%] '>
          <button
            onClick={() => handleHexColor()}
            className="text-red-500  bg-gray-400 rounded-xl p-2 m-2"
          >
            Hex value
          </button>
          <button
            onClick={() => handleRgbColor()}
            className="text-red-500 bg-gray-400 rounded-xl p-2 m-2"
          >
            RGB Value
          </button>
        </div>
      </div>
    </>
  );
}

export default Bgchanger;
