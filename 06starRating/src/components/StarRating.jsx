import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import "./style.css";

// eslint-disable-next-line react/prop-types
function StarRating({ noOfStar = 5 }) {
  const [hover, setHover] = useState("");
  const [rating, setRating] = useState(-1);
  function handleOnCLick(getCurrentIndex) {
    setRating(getCurrentIndex);
    console.log(getCurrentIndex);
  }
  function handleMouseMOve(getCurrentIndex) {
    setHover(getCurrentIndex);
    console.log(getCurrentIndex);
  }
  function handleMouseLeave() {
    setHover(rating);
  }
  return (
    <>
      <div className="star-rating flex mt-9   justify-center">
        {[...Array(noOfStar)].map((val, index) => {
          return (
            <CiStar
              key={index}
              className={index <= (hover || rating) ? "active" : "inActive"}
              onClick={() => handleOnCLick(index)}
              onMouseMove={() => handleMouseMOve(index)}
              onMouseLeave={() => handleMouseLeave()}
              size={70}
            />
          );
        })}
      </div>
    </>
  );
}

export default StarRating;
