import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { HomeCard, HomeRow, HomeWrapper, } from './Home.styles';
import { Text, Image, Button, StyleSheet} from 'react-native';
import List from './foodlist.js'

export const Home = () => {
  return (
    <HomeWrapper>
      <Button
        color= "tomato"
        title="New List"
        style= {styles.button}
        onPress={() => Alert.alert('Simple Button pressed')}
      />
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
  fontWeight: 'bold',
  padding: 5,
  marginBottom: 50,
}
});