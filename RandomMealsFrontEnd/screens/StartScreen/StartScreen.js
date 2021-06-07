import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  Platform,
  StatusBar,
  ImageBackground,
  Text,
  TouchableHighlight,
  View,
  Image,
} from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { withTheme } from 'styled-components/native';

export const StartScreen = () => {
  const navigation = useNavigation();

  const image = {
    uri: 'https://nadiashealthykitchen.com/wp-content/uploads/2020/01/tofu-quinoa-sushi-bowl9.jpg',
  };
  return (
    <ImageBackground source={image} style={styles.image}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 1000,
        }}
      >
        <Image
          source={require('../../assets/highlightburger-frame.png')}
          style={{ height: 100, width: 120 }}
        />
      </View>
      <TouchableHighlight
        style={styles.proceedButton}
        onPress={() => {
          navigation.navigate('TabNavigator', {
            screen: 'Hem',
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
    backgroundColor: 'black',
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
