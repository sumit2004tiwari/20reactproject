import React, { useEffect, useState } from "react";

function SearchAutomation() {
  const [data, setData] = useState("");
  const [filterData, setFilterData] = useState("");
  const [lowerCase , setLowerCase] = useState("")

  function handleChange(e) {
    const lower = e.target.value.toLowerCase();
    setLowerCase( lower)
  }
  

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://dummyjson.com/users`);
      const mydata = await data.json();
      console.log(mydata);
      setData(mydata.users.map((item) => item.firstName));
    };
    fetchData();
  }, []);
  console.log(data, handleChange);
  return (
    <>
      <input
        type="text"
        placeholder="enter name"
        className="bg-slate-500 p-3 m-auto rounded-lg text-white"
        onChange={handleChange}
      />
    </>
  );
}

export default SearchAutomation;
