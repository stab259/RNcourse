import { useState } from 'react'
import {
  Button,
  Image,
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from 'react-native'

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText)
    setEnteredGoalText('')
  }

  return (
    <Modal
      visible={props.visible}
      animationType='slide'
      statusBarTranslucent={true}
    >
      <KeyboardAvoidingView style={styles.inputContainer} behavior='padding'>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          placeholder='Your course goals!'
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Cancel' onPress={props.onCancel} color='#e7ca6e' />
          </View>
          <View style={styles.button}>
            <Button title='Add goal' onPress={addGoalHandler} color='#8fb13f' />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#34623f',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    width: '100%',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddebba',
    borderRadius: 6,
    backgroundColor: '#ddebba',
    color: '#4e4e4e',
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
})
