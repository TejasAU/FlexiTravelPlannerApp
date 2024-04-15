import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, AntDesign, MaterialIcons } from '@expo/vector-icons';
import MyItineraries from './components/Itineraries/myItineraries/MyItineraries';
import ExploreItineraries from './components/Itineraries/exploreItineraries/ExploreItineraries';
import Home from './components/home/Home';
import Signup from './components/login/Signup';
import Login from './components/login/Login';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e69138',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore Itineraries"
        component={ExploreItineraries}
        options={{
          tabBarLabel: 'Explore Itineraries',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="travel-explore" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="My Itineraries"
        component={MyItineraries}
        options={{
          tabBarLabel: 'My Itineraries',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="schedule" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="login" color={color} size={size} />
          ),
        }}
        />
      <Tab.Screen
        name="Sign Up"
        component={Signup}
        options={{
          tabBarLabel: 'Signup',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="adduser" color={color} size={size} />
          ),
        }}
        />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
