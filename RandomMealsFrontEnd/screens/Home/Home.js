import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, SafeAreaView, } from 'react-native';
import { List } from './foodlist';

export const Home = () => {
  const image = {
    uri:
      'https://phonewallpaperhd.com/wp-content/uploads/2020/09/Food-iPhone-7-Wallpaper-HD.jpg',
  };
  return (
    <SafeAreaView style={styles.safeHome}>
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => {}} 
        >
          <Text style={styles.buttonText}>⇄</Text>
        </TouchableOpacity>
      </View>
      <Text>
          <List />
      </Text>
      <StatusBar style='auto'/>

    </SafeAreaView>
  );
};
export default Home;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignSelf:'flex-start',
    marginBottom: 20,
    justifyContent: 'center',
    marginHorizontal: 48,
    width: 60,
    height: 60,
    fontWeight: "bold",
    fontSize: 40,
},
buttonText: {
        fontSize: 50,
        fontWeight: '400',
        color: "#fff",
    },
safeHome:{
    flex: 1,
    backgroundColor: '#199145',
    alignItems: "center",
    justifyContent: "center"
  }
});
