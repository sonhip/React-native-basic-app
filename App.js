import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goal, setGoal] = useState();
  const [listGoal, setListGoal] = useState([]);

  const handleInputText = (text) => {
    setGoal(text);
  };
  const handleAddNewGoals = () => {
    setListGoal([...listGoal, { text: goal, id: Math.random().toString() }]);
    setGoal("");
  };
  const handleDeleteGoals = (id) => {
    setListGoal((currentGoal) => currentGoal.filter((goal) => goal.id !== id));
  };
  return (
    <View style={styles.container}>
      <GoalInput
        onInputText={handleInputText}
        onAddNewGoals={handleAddNewGoals}
        onTex
      />
      <View style={styles.listGoalsContainer}>
        <FlatList
          data={listGoal}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteGoals={handleDeleteGoals}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item, index) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },

  listGoalsContainer: {
    flex: 5,
    marginTop: 16,
  },
});
