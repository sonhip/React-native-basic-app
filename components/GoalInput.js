import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function GoalInput(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputText}
        placeholder="Type your goals here..."
        onChangeText={props.onInputText}
      />
      <Button title="Add" onPress={props.onAddNewGoals} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#cccccc",
    alignItems: "center",
  },
  inputText: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#cccccc",
    width: "70%",
    padding: 8,
    marginRight: 8,
  },
});
