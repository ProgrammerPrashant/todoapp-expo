import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';
import GoalItems  from './components/GoalItems';
import GoalInput from './components/GoalInput';

export default function App() {
  
 

  const [courseGoals, setCouseGoals] = useState([]);
  const[isModalOpen, setModalOpen] = useState(false);


 
  const addGoalHandler = gaolTitle => {
  setCouseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: gaolTitle }]);

  setModalOpen(false);
  //enteredGoal('');

  };

    const removeGoalHandler = goalId => {

        setCouseGoals(currentGoals => {


            return currentGoals.filter((goal) => goal.id !== goalId);
        });

    };
  

    const isModalClose = () => {

      setModalOpen(false);

    };

  return (
    <View style={styles.screen}>
      <Button title="Add Goals" onPress={() => setModalOpen(true)} />
      <GoalInput onClose={isModalClose} visible={isModalOpen} onAddGoal={addGoalHandler} />
      <FlatList keyExtractor={(item, index) => item.id } data={courseGoals} renderItem ={itemData => <GoalItems id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} /> } 
       />
       
    </View>
  );
}

const styles = StyleSheet.create({

  screen : {
  padding:50
  }

 
});
