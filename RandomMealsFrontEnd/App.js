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

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Home } from './screens/Home/Home';
import { Details } from './screens/Details/Details';
import { AddDish } from './screens/AddDish/AddDish';
import { NavigationWrapper } from './screens/NavigationWrapper/NavigationWrapper';
import { render } from 'react-dom';

const Tab = createBottomTabNavigator();

export default function App() {
  const image = {
    uri:
      'https://phonewallpaperhd.com/wp-content/uploads/2020/09/Food-iPhone-7-Wallpaper-HD.jpg',
  };

  function renderNavigation() {
    return render(<NavigationWrapper></NavigationWrapper>);
  }

  return (
    <ImageBackground source={image} style={styles.image}>
      <TouchableHighlight
        style={styles.proceedButton}
        onPress={renderNavigation}
      >
        <Text style={styles.buttonText}>Start Cooking!</Text>
      </TouchableHighlight>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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
