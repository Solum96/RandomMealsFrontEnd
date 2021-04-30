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
  const dishData = route.route.params;
  return (
    <SafeAreaView>
      <Text>{dishData.name}</Text>
      <Text>{dishData.itemId}</Text>
    </SafeAreaView>
  );
};
