import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { colors, padding, margin } from '../../assets/stylesheets/base';

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: padding.md,
  },
  homeText: {
    color: colors.secondary,
  },
  searchTextInput: {
    color: colors.tertiary,
    backgroundColor: colors.secondary,
    padding: padding.md,
    margin: margin.md,
    border: `2px solid ${colors.tertiary}`,
  },
});

export { styles };
