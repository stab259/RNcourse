import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

function PlaceItem({ place }) {
  return (
    <Pressable>
      <Image source={{ uri: place.imageUri }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  )
}

export default PlaceItem

const styles = StyleSheet.create({})
