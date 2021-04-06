import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { AddDishTextInput, AddDishWrapper } from './AddDish.style';

export const AddDish = () => {
  return (
  
    <AddDishWrapper>
      <Text style={styles.dishTitle}> Do you want to add a new dish?</Text>
      <Text style={styles.subtitle}>Start by naming your food baby...</Text>
      <AddDishTextInput></AddDishTextInput>
      <StatusBar style='auto' />
      <Button
      color= "#f2c266"
        title="Press me to fill your belly"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </AddDishWrapper>
  );
};

const styles = StyleSheet.create({
  dishTitle: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#f2c266',
    paddingBottom: 5,
  },
  subtitle: {
    paddingTop: 15,
    paddingBottom:0,
    fontStyle: 'italic',
    color: '#fff',
  },
})
