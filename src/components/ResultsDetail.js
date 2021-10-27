import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Text>{result.name}</Text>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text>
        {result.rating} {<AntDesign name="star" size={14} color="black" />}{" "}
        {result.review_count}{" "}
        {
          <MaterialCommunityIcons
            name="comment-multiple"
            size={14}
            color="black"
          />
        }
        .
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginLeft: 15,
  },
  image: {
    width: 350,
    height: 300,
    borderRadius: 4,
  },
});

export default ResultsDetail;
