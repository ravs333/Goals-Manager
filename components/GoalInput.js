import React, { useState } from 'react';
import { StyleSheet, Text, Button, View, TextInput, Modal, TouchableOpacity } from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);

        // props.onAddGoal.bind(this, enteredGoal)
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Course Goal" style={styles.textInput} onChangeText={goalInputHandler} value={enteredGoal}/>
                <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button1} onPress={props.onCancel}>
                            <Text> CANCEL </Text>
                        </TouchableOpacity>
                        <TouchableOpacity title="ADD" style={styles.button2} onPress={addGoalHandler}> 
                            <Text> ADD </Text>
                        </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%',
        marginBottom: 10

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button1: {
        width: '40%',
        backgroundColor: 'red',
        color: '#FFFFFF',
        alignItems: 'center',
        padding: 10
    },
    button2: {
        width: '40%',
        backgroundColor: 'blue',
        color: '#FFFFFF',
        alignItems: 'center',
        padding: 10
    }
});

export default GoalInput;