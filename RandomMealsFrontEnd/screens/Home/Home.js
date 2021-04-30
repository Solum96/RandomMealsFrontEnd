import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  HomeCard,
  HomeRow,
  HomeWrapper,
} from './Home.styles';
import {
  Text,
  Image,
  Button,
  StyleSheet,
  Alert,
  View,
  ImageBackground,
} from 'react-native';
import { List } from './foodlist';

export const Home = () => {
  const image = {
    uri:
      'https://phonewallpaperhd.com/wp-content/uploads/2020/09/Food-iPhone-7-Wallpaper-HD.jpg',
  };
  return (
    <HomeWrapper>
      <ImageBackground
        source={image}
        style={{ resizeMode: 'cover' }}
      >
        <View style={styles.button}>
          <Button
            color='#f2c266'
            title='  Ny Lista  '
            style={styles.button}
            onPress={() =>
              Alert.alert('Ny matlista- funktionalitet')
            }
          />
        </View>
        <List />
        <Image
          source={require('../../assets/favicon.png')}
        />
        <StatusBar style='auto' />
        <HomeRow>
          <HomeCard>
            <Text>Yeet</Text>
          </HomeCard>
        </HomeRow>
      </ImageBackground>
    </HomeWrapper>
  );
};
export default Home;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginBottom: 15,
    justifyContent: 'center',
    marginHorizontal: 48,
    width: 100,
    height: 40,
  },
});
