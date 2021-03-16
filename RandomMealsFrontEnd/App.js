import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>
          Open up App.js to start working on your app!
        </Text>
        <Image source={require("./assets/favicon.png")}/>
        <StatusBar style="auto" />

        <View style={styles.row}>
          <View style={styles.itemCard}>
            <Text>
              Id: 1
              Namn: Nils Lundell
            </Text>
          </View>
          <View style={styles.itemCard}>
            <Text>
              Id: 1
              Namn: Nils Lundell
            </Text>
          </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flex: 0.2,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    flexDirection: 'row',
  },
  itemCard: {
    margin: 5,
    flex: 0.5,
    alignItems: 'center',
    width: '33%',
  }
});
