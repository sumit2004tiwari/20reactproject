import React, { useEffect, useState } from "react";
import "./scroll.css";
function ScrollIndicator() {
  const url = `https://dummyjson.com/products?limit=200`;
  const [apiData, getApiData] = useState("");
  const [handleScroll, sethandleScroll] = useState(0);
  console.log(handleScroll, "handle")

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(url);
      
      const finalData = await data.json();

      getApiData(finalData.products);
    };
    fetchData();
  }, []);

  const handleScrollfunc = () => {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const hieght =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    sethandleScroll((howMuchScrolled / hieght) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollfunc);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  console.log(apiData, handleScroll);
  return (
    <>
      <div className="top-container">
        <div className="sroll-tracking-container">
          <div
            className="current-progress-bar "
            style={{ width: `${handleScroll}%` }}
          ></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <h2>hello</h2>
        {apiData && apiData.length > 0
          ? apiData.map((item, index) => {
              return (
                <div key={index}>
                  <button className="p-4 bg-slate-500 m-5 rounded-xl hover:bg-slate-700 hover:text-white ">
                    {item.title}
                  </button>
                  <br />
                </div>
              );
            })
          : null}
      </div>
    </>
  );
}

export default ScrollIndicator;
