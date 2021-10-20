import React, { useState } from "react";
import { View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    // console.log("sd");

    const response = await yelp.get("/search", {
      params: {
        limit: 30,
        term,
        location: "New York City",
      },
    });
    // console.log(response.data);
    setResults(response.data.businesses);
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      <Text>We have found {results.length} rants</Text>
    </View>
  );
};

export default SearchScreen;
