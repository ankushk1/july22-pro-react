import React, { useEffect, useState } from "react";

const withApiCall = (PrevComponent, category) => () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSetApiDataHandler = (data) => {
    // setApiData(category === "products" ? data.products : data.users);
    switch (category) {
      case "products":
        return data.products;
      case "users":
        return data.users;
      case "todos":
        return data.todos;
      default:
        return;
    }
  };

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch(`https://dummyjson.com/${category}`);
    const data = await res.json();
    console.log(" DATA from HOC -----> ", data);
    setApiData(onSetApiDataHandler(data));
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [category]);

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
      case "todos":
        return (
          <div
            key={index}
            className="card me-5 mt-4"
            style={{ width: "18rem" }}
          >
            {/* <img src={elem?.image} className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title">{elem?.todo}</h5>
              <p className="card-text">{elem?.id}</p>
              <p className="card-text">Completed - {String(elem?.completed)}</p>
            </div>
          </div>
        );
      //4 Case
      default:
        return;
    }
  };

  return (
    <div>
      <PrevComponent
        loading={loading}
        apiData={apiData}
        renderData={renderData}
      />
    </div>
  );
};

export default withApiCall;
