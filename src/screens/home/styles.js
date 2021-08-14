import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { padding, margin } from '../../assets/stylesheets/base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  homeText: {
    color: '#fff',
  },
  searchTextInput: {
    color: '#fff',
    padding: padding.md,
    margin: margin.md,
  },
});

export { styles };
