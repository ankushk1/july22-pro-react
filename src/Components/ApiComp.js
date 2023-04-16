import React, { useEffect, useState } from "react";

const ApiComp = () => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setApiData(data.products);
  };

  useEffect(() => {
    console.log("useEffect Called");
    // fetch("https://dummyjson.com/products")
    //   .then((res) => res.json())
    //   .then((json) => setApiData(json));
    fetchData();
  }, []);

  console.log(apiData);
  return (
    <div>
      {console.log("render")}
      <div className="d-flex flex-wrap">
        {apiData.slice(0, 10).map((elem, index) => (
          <div key={index} className="card me-5 mt-4" style={{ width: "28rem" }}>
            <img src={elem?.thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{elem?.title}</h5>
              <p className="card-text">{elem?.description}</p>
              <p className="card-text">{elem?.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiComp;
