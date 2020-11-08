import React, {useState} from 'react';
import {View, Button, TextInput, StyleSheet, Modal} from 'react-native';

const GoalInput = props => {
    const [enteredGoal,setenteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setenteredGoal(enteredText);
      };
    
      const AddGoals = () => {
        props.onAddGoal(enteredGoal);

        setenteredGoal('');

      };

return  ( 
    <Modal visible={props.visible}>
        <View style={styles.design}>
        <TextInput placeholder="Course Goal" style={styles.TextInputs} onChangeText={goalInputHandler} />
        <View style={styles.addButton}>
            <Button  title="ADD"   onPress={AddGoals} />
        <Button color="red" title="Close"   onPress={props.onClose} />
        </View>
        </View>
    </Modal>
);
};

const styles = StyleSheet.create({

    TextInputs : {
        borderColor: 'black',
         borderWidth: 1,
          width:'80%',
           padding: 10,
           marginBottom: 15
      },
    
      design :  {
        flex: 1,
         justifyContent: 'center',
          alignItems: 'center',
      },

      addButton : {
        flexDirection : 'row',
        width: '40%',
        justifyContent: 'space-between',
      }

});

export default GoalInput;