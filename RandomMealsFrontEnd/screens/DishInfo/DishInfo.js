import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  Platform,
  StatusBar,
  ImageBackground,
  Text,
  TouchableHighlight,
  SafeAreaView,
} from 'react-native';

import { useNavigation } from '@react-navigation/core';

export const DishInfo = (route) => {
  const data = route.route.params.item;
  return (
    <SafeAreaView style={styles.container}>
      <Text> {data.name}</Text>
      <Text> {data.id}</Text>
      {data.instructions.map((item, index) => (
        <Text>- {item}</Text>
      ))}
      <Text>------------------------------------</Text>
      {data.ingredients.map((item, index) => (
        <Text>
          {index + 1}. {item}
        </Text>
      ))}
    </SafeAreaView>
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
