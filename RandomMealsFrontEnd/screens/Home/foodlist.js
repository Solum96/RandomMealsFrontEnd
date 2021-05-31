import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

import { useNavigation } from '@react-navigation/core';

export const List = () => {
  const items = {
    names: [
      {
        id: 0,
        veckodag: 'Måndag',
        namn: 'Korvstroganoff',
        instructions: [
          'gör så här',
          'och sen så här',
          'till sist kan du lägga dig på marken och gråta lite',
        ],
        ingredients: [
          'Korv',
          'Stroganoff',
          'Ris',
          'Kärlek',
        ],
      },
      {
        id: 1,
        veckodag: 'Tisdag',
        namn: 'Fnösfärsbös Å spaghetti',
      },
      {
        id: 2,
        veckodag: 'Onsdag',
        namn: 'Grillad aubergine',
      },
      {
        id: 3,
        veckodag: 'Torsdag',
        namn: 'Köttbullar å mos',
      },
      {
        id: 4,
        veckodag: 'Fredag',
        namn: 'Tofubowl',
      },
      {
        id: 5,
        veckodag: 'Lördag',
        namn: 'Restfest deluxe',
      },
      {
        id: 6,
        veckodag: 'Söndag',
        namn: 'Korv och makaroner',
      },
    ],
  };
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      {items.names.map((item, index) => (
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
            {item.namn}
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
