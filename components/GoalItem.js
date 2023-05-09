import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.id)}
        android_ripple={{ color: '#ddd', borderless: true }}
        style={({ pressed }) =>
          Platform.OS == 'ios' && pressed && styles.pressedItem
        }
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#607744',
  },
  pressedItem: {
    opacity: 0.5,
    backgroundColor: '#ddd',
  },
  goalText: {
    padding: 8,
    color: 'white',
  },
})
