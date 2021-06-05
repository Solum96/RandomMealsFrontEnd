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
  SafeAreaView,
} from 'react-native';

import { useNavigation } from '@react-navigation/core';

export const DishInfo = (route) => {
  const data = route.route.params.item;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> {data.name} </Text>
      {data.ingredients.map((item, index) => (
        <Text>- {item}</Text>
      ))}
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 17,
        }}
      />
      {data.instructions.map((item, index) => (
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
  title: { fontSize: 20 },
});
