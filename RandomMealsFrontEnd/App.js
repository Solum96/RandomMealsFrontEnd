import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  Platform,
  StatusBar,
  ImageBackground,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import {
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationWrapper } from './screens/NavigationWrapper/NavigationWrapper';
import { StartScreen } from './screens/StartScreen/StartScreen';
import { DishInfo } from './screens/DishInfo/DishInfo';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name='StartScreen'
          component={StartScreen}
        />
        <Stack.Screen
          name='TabNavigator'
          component={NavigationWrapper}
        />
        <Stack.Screen
          name='DishInfo'
          component={DishInfo}
          options={{
            headerShown: true,
            headerBackTitle: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:
      Platform.OS === 'android'
        ? StatusBar.currentHeight
        : 0,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  proceedButton: {
    backgroundColor: 'tomato',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
  },
});
