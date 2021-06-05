import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { DetailsWrapper } from './Details.styles';

export const Details = () => {
  const [value, setValue] = useState('value');
  const { getItem, setItem } = useAsyncStorage('weekMenu');

  const readItem = async () => {
    const item = await getItem();
    setValue(item);
  };

  const writeItem = async (newValue) => {
    await setItem(newValue);
    setValue(newValue);
  };

  useEffect(() => {
    readItem();
  }, []);

  let shoppingList = [];
  try {
    shoppingList = JSON.parse(value);
  } catch {
    console.log('cry a bit');
  }

  return (
    <View style={styles.safeView}>
      <Text style={styles.title}>Inköpslista</Text>
      <View style={styles.listView}>
        {shoppingList.map((item) =>
          item.ingredients.map((item) => (
            <Text style={styles.text}>-{item}</Text>
          ))
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    justifyContent: 'center',
    paddingTop:
      Platform.OS === 'android'
        ? StatusBar.currentHeight
        : 0,
  },
  listView: {
    paddingLeft: 15,
  },
  text: { paddingBottom: 1 },
  title: {
    fontSize: 35,
    alignSelf: 'center',
  },
});
