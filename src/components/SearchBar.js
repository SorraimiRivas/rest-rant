import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Octicons
        style={styles.iconStyle}
        name="search"
        size={30}
        color="black"
      />
      <TextInput
        autoCorrect={true}
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "lightgray",
    height: 50,
    borderRadius: 25,
    marginTop: 15,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    left: 25,
    fontSize: 25,
  },
  iconStyle: {
    left: 10,
    fontSize: 35,
    alignSelf: "center",
  },
});

export default SearchBar;
