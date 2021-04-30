import 'react-native-gesture-handler';
import React from 'react';

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

          if (route.name === 'Hem') {
            iconName = focused
              ? 'ios-home-sharp'
              : 'ios-home-outline';
          } else if (route.name === 'Inköpslista') {
            iconName = focused ? 'ios-list' : 'ios-list';
          } else if (route.name === 'Lägg till maträtt') {
            iconName = focused
              ? 'add-circle'
              : 'add-circle-outline';
          }

          // You can return any component that you like here!
          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name='Lägg till maträtt'
        component={AddDish}
      />
      <Tab.Screen name='Hem' component={Home} />
      <Tab.Screen name='Inköpslista' component={Details} />
    </Tab.Navigator>
  );
};
