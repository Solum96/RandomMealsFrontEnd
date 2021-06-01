import React, { useState } from 'react';

import { Scrambler } from './Scrambler';
import { List } from './foodlist';
import { Text, View } from 'react-native';

export default MenuView = () => {
  const [menu, updateMenu] = useState([
    {
      //   id: 0,
      //   name: 'Test',
      //   instructions: ['gör en boll'],
      //   ingredients: ['rulla bollen'],
    },
  ]);

  const handleRandomize = (data) => {
    updateMenu(data);
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
