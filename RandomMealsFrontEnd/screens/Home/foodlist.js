import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import WeekMenu from '../../Hooks/WeekMenu';

import { useNavigation } from '@react-navigation/core';

export const List = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      {WeekMenu().map((item, index) => (
        <TouchableOpacity
          key={item.id}
          style={styles.container}
          onPress={() => {
            navigation.navigate('DishInfo', {
              item: item,
            });
          }}
        >
          <Text style={styles.day}>{item.veckodag}</Text>
          <Text style={styles.text}>
            {'      '}
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 6,
    padding: 4,
    flex: 1,
    paddingRight: 75,
    backgroundColor: '#fff',
  },
  text: {
    display: 'flex',
    fontSize: 15,
    color: '#333c',
    marginLeft: 20,
  },
  day: {
    fontWeight: 'bold',
  },
  view: {
    display: 'flex',
    paddingTop:
      Platform.OS === 'android'
        ? StatusBar.currentHeight
        : 0,
  },
});
