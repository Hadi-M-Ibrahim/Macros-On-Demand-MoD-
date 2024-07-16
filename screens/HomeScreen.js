import React, { useState } from "react";
import {
  SafeAreaView,
  TextInput,
  Button,
  StyleSheet,
  Text,
  Alert,
} from "react-native";

const HomeScreen = () => {
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fat, setFat] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Input Ideal Macros</Text>
      <Text style={styles.label}>Calories:</Text>
      <TextInput
        style={styles.input}
        value={calories}
        onChangeText={setCalories}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Protein (g):</Text>
      <TextInput
        style={styles.input}
        value={protein}
        onChangeText={setProtein}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Carbs (g):</Text>
      <TextInput
        style={styles.input}
        value={carbs}
        onChangeText={setCarbs}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Fat (g):</Text>
      <TextInput
        style={styles.input}
        value={fat}
        onChangeText={setFat}
        keyboardType="numeric"
      />
      <Button
        title="Submit"
        onPress={console.log()} // To do: write function to handle submission
        color={styles.button.color}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8F3DC",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1B4332",
    marginBottom: 20,
  },
  label: {
    color: "#1B4332",
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#74C69D",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "#B7E4C7",
    color: "#1B4332",
  },
  button: {
    color: "#2D6A4F",
  },
});

export default HomeScreen;
