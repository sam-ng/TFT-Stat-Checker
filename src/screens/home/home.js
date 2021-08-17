import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableHighlight,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { styles } from './styles';

const goBtnHandler = ({ navigation, screen, setSummoner }) => {
  navigation.navigate(screen);
  setSummoner;
};

const Home = ({ navigation }) => {
  const [summoner, onChangeSummoner] = useState('');

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.homeText}>Welcome to TFT Stat Checker!</Text>
      <View style={styles.rowContainer}>
        <TextInput
          style={styles.searchTextInput}
          onChangeText={onChangeSummoner}
          placeholder='Enter Summoner name.'
        />
        <Button
          title='GO'
          onPress={() =>
            navigation.navigate('Summoner', { summoner: summoner })
          }
        />
      </View>
      <StatusBar></StatusBar>
    </View>
  );
};

export default Home;
