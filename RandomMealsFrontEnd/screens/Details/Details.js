import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { DetailsWrapper } from './Details.styles';

export const Details = () => {
  return (
    <DetailsWrapper>
      <Text>Det här är en ny sida på vår app</Text>
      <StatusBar style='auto' />
    </DetailsWrapper>
  );
};
