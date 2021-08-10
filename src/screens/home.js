import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { Constants } from 'expo';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.homeText}>Welcome to TFT Stat Checker!</Text>
      <Button
        title='Screen2'
        onPress={() => navigation.navigate('Screen2')}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeText: {
    color: '#fff',
  },
});

export default Home;
