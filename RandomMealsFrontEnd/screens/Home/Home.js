import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { HomeCard, HomeRow, HomeWrapper } from './Home.styles';
import { Text, Image } from 'react-native';

export const Home = () => {
  return (
    <HomeWrapper>
      <Text>Open up App.js to start working on your app!</Text>
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
