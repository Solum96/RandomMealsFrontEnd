import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { HomeCard, HomeRow, HomeWrapper, } from './Home.styles';
import { Text, Image, Button, StyleSheet, Alert, View} from 'react-native';
import List from './foodlist.js'

export const Home = () => {
  return (
    <HomeWrapper>
      <View style={styles.button}>
        <Button
          color= "#f2c266"
          title="  Ny Lista  "
          style= {styles.button}
          onPress={() => Alert.alert('Ny matlista- funktionalitet')}
        />
      </View>
      <Text>
          <List />
      </Text>
      <Image source={require('../../assets/favicon.png')} />
      <StatusBar style='auto' />
      <HomeRow>
        <HomeCard>
          <Text>Yeet</Text>
        </HomeCard>
      </HomeRow>
    </HomeWrapper>
  );
};
export default Home

const styles = StyleSheet.create ({
button:{
    flexDirection: 'row',
    alignSelf:'flex-start',
    marginBottom: 15,
    justifyContent: 'center',
    marginHorizontal: 48,
    width: 100,
    height: 40,
}
});