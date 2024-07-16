import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

const ResultsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Insert Results Here</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8F3DC",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1B4332",
  },
});

export default ResultsScreen;
