import { useEffect, useState } from "react";

export const useFormHook = () => {
  const [inputValues, setInputValues] = useState({});

  const handleInputChange = (event) => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  };

  return {
    inputValues,
    handleInputChange
  };
};

export const useFetch = (url, route) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const res = await fetch(`${url}/${route}`);
    const data = await res.json();
    setApiData(data);
  };

  useEffect(() => {
    fetchData();
  }, [url, route]);

  return { apiData };
};
