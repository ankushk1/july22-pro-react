import React, { useEffect, useState } from "react";

const ApiComp = () => {
  const [apiData, setApiData] = useState([]);
  const [category, setCategory] = useState("products");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch(`https://dummyjson.com/${category}`);
    const data = await res.json();
    setApiData(category === "products" ? data.products : data.users);
    setLoading(false);
  };

  useEffect(() => {
    console.log("useEffect Called");
    fetchData();
  }, [category]);

  console.log(apiData);

  const renderData = (elem, index) => {
    switch (category) {
      case "products":
        return (
          <div
            key={index}
            className="card me-5 mt-4"
            style={{ width: "18rem" }}
          >
            <img src={elem?.thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{elem?.title}</h5>
              <p className="card-text">{elem?.description}</p>
              <p className="card-text">{elem?.price}</p>
            </div>
          </div>
        );
      case "users":
        return (
          <div
            key={index}
            className="card me-5 mt-4"
            style={{ width: "18rem" }}
          >
            <img src={elem?.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                {elem?.firstName + " " + elem?.lastName}
              </h5>
              <p className="card-text">{elem?.email}</p>
              <p className="card-text">{elem?.phone}</p>
            </div>
          </div>
        );
      // 3rd case
      default:
        return;
    }
  };

  return (
    <div>
      <div>
        <button
          className="btn btn-primary btn-lg me-2"
          onClick={() => setCategory("products")}
        >
          Products
        </button>
        <button
          className="btn btn-secondary btn-lg"
          onClick={() => setCategory("users")}
        >
          Users
        </button>
      </div>
      {loading && <h1>Loading.....</h1>}
      {!loading && (
        <div className="d-flex flex-wrap justify-content-center">
          {apiData.slice(0, 10).map((elem, index) => renderData(elem, index))}
        </div>
      )}
    </div>
  );
};

export default ApiComp;
