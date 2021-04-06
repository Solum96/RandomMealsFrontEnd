import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Platform, StatusBar } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { AddDish } from '../AddDish/AddDish';
import { Home } from '../Home/Home';
import { Details } from '../Details/Details';

const Tab = createBottomTabNavigator();

export const NavigationWrapper = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
          } else if (route.name === 'Details') {
            iconName = focused ? 'ios-list' : 'ios-list';
          } else if (route.name === 'Add Food') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name='Add Food' component={AddDish} />
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Details' component={Details} />
    </Tab.Navigator>
  );
};
