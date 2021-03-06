import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "California",
        },
      });

      setResults(response.data.businesses);
    } catch (err) {
      setError("something went wrong");
    }
  };

  useEffect(() => {
    searchApi("Coffee");
  }, []);

  return [searchApi, results, error];
};
