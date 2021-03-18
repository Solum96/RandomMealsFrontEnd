import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, SafeAreaView, TextInput } from 'react-native';
import { AddDishTextInput, AddDishWrapper } from './AddDish.style';

export const AddDish = () => {
  return (
    <AddDishWrapper>
      <Text>Lägg till rätt:</Text>
      <AddDishTextInput></AddDishTextInput>
      <StatusBar style='auto' />
    </AddDishWrapper>
  );
};
