import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, error] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {error ? <Text>{error}</Text> : null}
      <ScrollView showsVerticalScrollIndicator={false}>
        <ResultsList
          dollar="$"
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList
          dollar="$$"
          results={filterResultsByPrice("$$")}
          title="Bit Pricier"
        />
        <ResultsList
          dollar="$$$"
          results={filterResultsByPrice("$$$")}
          title="Big Spenders"
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
