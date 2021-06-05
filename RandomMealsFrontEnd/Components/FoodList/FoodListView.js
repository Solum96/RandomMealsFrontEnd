import React, { useState } from 'react';

import { Scrambler } from './Scrambler';
import { List } from './foodlist';
import { Button, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default MenuView = () => {
  const getMenuData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(
        'weekMenu'
      );
      return jsonValue != null
        ? JSON.parse(jsonValue)
        : null;
    } catch (e) {
      alert(`error: ${e}`);
    }
  };

  const [menu, updateMenu] = useState([
    getMenuData(),
    // {
    //   id: 0,
    //   name: '',
    //   instructions: [''],
    //   ingredients: [''],
    // },
  ]);
  const handleRandomize = async (data) => {
    updateMenu(data);
    try {
      await AsyncStorage.setItem(
        'weekMenu',
        JSON.stringify(data)
      );
    } catch (e) {
      alert('data could not be saved: ' + e);
    }
  };

  return (
    <View>
      <Scrambler onPress={handleRandomize} />
      <Text>
        <List menu={menu} />
      </Text>
    </View>
  );
};
