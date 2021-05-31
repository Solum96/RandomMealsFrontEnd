import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Scrambler } from '../../Components/Scrambler';
import { List } from './foodlist';

export const Home = () => {
  return (
    <SafeAreaView style={styles.safeHome}>
      <Scrambler />
      <Text>
        <List />
      </Text>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
};
export default Home;

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
  safeHome: {
    flex: 1,
    backgroundColor: '#199145',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:
      Platform.OS === 'android'
        ? StatusBar.currentHeight
        : 0,
  },
});
