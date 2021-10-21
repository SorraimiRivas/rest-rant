import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Text>{result.name}</Text>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text>
        {result.rating} stars, {result.review_count} reviews.
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
    width: 250,
    height: 200,
    borderRadius: 4,
  },
});

export default ResultsDetail;
