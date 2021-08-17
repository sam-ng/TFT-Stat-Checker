import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Summoner = ({ route }) => {
  const { summoner } = route.params;
  return (
    <View>
      <Text>{summoner}</Text>
    </View>
  );
};

export default Summoner;
