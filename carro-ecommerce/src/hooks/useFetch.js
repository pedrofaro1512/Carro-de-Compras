import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, options) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const backendUrl = new URL("http://localhost:3001/api");
        backendUrl.searchParams.append("https://api.jsonserve.com/ddZaSD", url);
        const response = await axios.get(backendUrl + url, options);
        setResult(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [options, url]);

  return { loading, result, error };
};

export default useFetch;
