import { useState } from "react";

function Gituserapi() {
  const [data, setData] = useState("");
  const [userInput,setUserInput] = useState("")


  const handleClick = () => {
    const fetchData = async () => {
      try {
        const getData = await fetch(`https://api.github.com/users/${userInput}`);
        const myData = await getData.json();
        setData(myData);
        console.log(myData)
        console.log(setData)
      } catch (error) {
        console.log(error.message, " sorry i catch a error on fetching data from api");
      }
    };

    fetchData();
  };


  return (
    <>
      <div>
        <h2 className="text-4xl font-bold text-pink-500 ml-5">
          Github Spotter
        </h2>
        <input
          type="text"
          placeholder="enter profile name"
          onChange={(e)=>setUserInput(e.target.value)}
          value={userInput}
          className="bg-gray-300 m-3 p-3 rounded-2xl hover:bg-slate-200 
       "
        />
        <button
          className=" bg-slate-400 hover:bg-slate-600 hover:text-white m-3 p-3 rounded-md"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
      <div className="wrapper w-auto h-96 border-2 border-solid border-red-950 rounded-md shadow-xl">
        <img
          src={data.avatar_url}
          alt="image"
          className="h-32 m-auto w-32 rounded-full mt-8"
        />{" "}
        <br />
        <h3 className="font-bold"> Name :{data.name}</h3>
        <h3 className="font-bold">Public Repo : {data.public_repos} </h3>
        <h3 className="font-bold">follower : {data.followers} </h3>
        <h3 className="font-bold">following : {data.following}</h3>
      </div>
    </>
  );
}

export default Gituserapi;
