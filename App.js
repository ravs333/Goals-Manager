import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { DynamicColorIOS, StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const customDynamicTextColor = DynamicColorIOS({
    dark: 'lightskyblue',
    light: 'midnightblue'
  });
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...courseGoals, { id: Math.random().toString(), value: goalTitle}]);
    setAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    })
  };

  const cancelGoalAdditionalHandler = () => {
    setAddMode(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => setAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionalHandler} />
      <FlatList data={courseGoals} renderItem={ itemData => 
        <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  }
});
