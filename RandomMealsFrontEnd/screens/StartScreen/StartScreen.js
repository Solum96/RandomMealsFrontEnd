import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  Platform,
  StatusBar,
  ImageBackground,
  Text,
  TouchableHighlight,
} from 'react-native';

import { useNavigation } from '@react-navigation/core';

export const StartScreen = () => {
  const navigation = useNavigation();

  const image = {
    uri:
      'https://nadiashealthykitchen.com/wp-content/uploads/2020/01/tofu-quinoa-sushi-bowl9.jpg',
  };
  return (
    <ImageBackground source={image} style={styles.image}>
      <TouchableHighlight
        style={styles.proceedButton}
        onPress={() => {
          navigation.navigate('TabNavigator', {
            screen: 'Hem',
            params: { title: 'Hej på dig' },
          });
        }}
      >
        <Text style={styles.buttonText}>
          Start Cooking!
        </Text>
      </TouchableHighlight>
    </ImageBackground>
  );
};

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
