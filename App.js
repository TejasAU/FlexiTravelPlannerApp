import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import MyItineraries from './components/Itineraries/myItineraries/MyItineraries';
import ExploreItineraries from './components/Itineraries/exploreItineraries/ExploreItineraries';
import Login from './components/login/Login';
import Signup from './components/login/Signup';
const Drawer = createDrawerNavigator();

function Home () {
  return (
  <View>
    <Text>Home</Text>
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
      <Drawer.Screen name="Login" component = {Login} />
      <Drawer.Screen name="Signup" component = {Signup} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}
