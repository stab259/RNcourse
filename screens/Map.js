import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

function Map() {
  const region= {
    latitude: 16.072150,
    longitude: 108.226790,
    latitudeDelta: 0.07,
    longitudeDelta: 0.03 
  }

  return (
    <MapView style={styles.map} customMapStyle={mapStyle} initialRegion={region}></MapView>
  )
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  }
})

const mapStyle = [
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
];