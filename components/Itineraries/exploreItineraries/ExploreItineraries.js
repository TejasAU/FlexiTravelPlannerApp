import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExploreItineraries = () => {
  return (
    <View style={styles.container}>
      <Text>Explore Itineraries</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ExploreItineraries;
