import React, { useState } from "react";
import "./style.css";

function Modal() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOnCLick = () => {
    // setModalOpen(true);
    // setModalOpen(modalOpen ? false : true)
    // instead of using these two line we can also do in a simple way . 
    setModalOpen(!modalOpen)
  };
  console.log(modalOpen);
  return (
    <>
      <h1>open modal on button click</h1>
      <div>
        {modalOpen && (
          <div className="wrapper box w-screen h-96 m-5 border-2 border-red-400 border-solid">
            <div className="container   h-96 rounded-lg grid grid-cols-3 m-1 overflow-hidden">
              <div className="box w-96 h-1/4 border-2 border-solid border-red-400 rounded-lg"></div>
              <div className="box w-96 h-1/4 border-2 border-solid border-red-400 rounded-lg"></div>
              <div className="box w-96 h-1/4 border-2 border-solid border-red-400 rounded-lg"></div>
              <div className="box w-96 h-1/4 border-2 border-solid border-red-400 rounded-lg"></div>
              <div className="box w-96 h-1/4 border-2 border-solid border-red-400 rounded-lg"></div>
              <div className="box w-96 h-1/4 border-2 border-solid border-red-400 rounded-lg"></div>
              <div className="box w-96 h-1/4 border-2 border-solid border-red-400 rounded-lg"></div>
              <div className="box w-96 h-1/4 border-2 border-solid border-red-400 rounded-lg"></div>
              <div className="box w-96 h-1/4 border-2 border-solid border-red-400 rounded-lg"></div>
              <div className="box w-96 h-1/4 border-2 border-solid border-red-400 rounded-lg"></div>
              <div className="box w-96 h-1/4 border-2 border-solid border-red-400 rounded-lg"></div>
              <div className="box w-96 h-1/4 border-2 border-solid border-red-400 rounded-lg"></div>
            </div>
          </div>
        )}
      </div>

      <button
        onClick={handleOnCLick}
        className="bg-gray-300 p-2 rounded-lg hover:bg-slate-400 hover:text-teal-50"
      >
        Modal
      </button>
    </>
  );
}

export default Modal;
