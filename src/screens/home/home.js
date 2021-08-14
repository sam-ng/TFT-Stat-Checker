import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { styles } from './styles';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.homeText}>Welcome to TFT Stat Checker!</Text>
      <TextInput
        style={styles.searchTextInput}
        placeholder='Enter Summoner name.'
      />
      <Button title='Screen2' onPress={() => navigation.navigate('Screen2')} />
      <StatusBar></StatusBar>
    </View>
  );
};

export default Home;
