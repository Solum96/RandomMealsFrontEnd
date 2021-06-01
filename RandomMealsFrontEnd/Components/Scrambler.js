import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import { foodScrambler } from '../Hooks/WeekMenu';
export const Scrambler = () => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        foodScrambler();
      }}
    >
      <Text style={styles.buttonText}>⇄</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginBottom: 20,
    justifyContent: 'center',
    marginHorizontal: 48,
    width: 60,
    height: 60,
    fontWeight: 'bold',
    fontSize: 40,
  },
  buttonText: {
    fontSize: 50,
    fontWeight: '400',
    color: '#fff',
  },
});
//matnummer Rnd
//iterera igenom listan och lägg till rätterna
