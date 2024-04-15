import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

function Home () {
  return (
  <View>
    <Text>Home</Text>
  </View>
  );
}

function MyItineraries () {
  return (
  <View style={styles.container}>
    <Text style={styles.text}>My Itineraries</Text>
  </View>
  );
}

function ExploreItineraries () {
  return(
  <View style={styles.container}>
    <Text>Explore Itineraries</Text>
  </View>
  );
}



export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="My Itineraries" component={MyItineraries} />
      <Drawer.Screen name="Explore Itineraries" component={ExploreItineraries} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
