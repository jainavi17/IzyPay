/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {StyleSheet} from 'react-native';

const AppStyles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  topBanner: {
    width: '100%',
    height: 225,
    left: 0,
    top: 0,
    flex: 1,
  },
  userName: {
    top: 20,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  topActionText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
    letterSpacing: -0.24,
    color: '#888888',
    marginTop: 15,
  },
  accountBalanceText: {
    left: '5%',
    top: 15,
    lineHeight: 17,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#888888',
    flex: 0,
    flexGrow: 0,
  },
  activeText: {
    right: '5%',
    lineHeight: 20,
    fontFamily: 'IBM Plex Mono',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 15,
    color: '#38A0FF',
    textAlign: 'right',
    letterSpacing: -0.24,
  },
  balanceText: {
    left: '5%',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 24,
    color: '#000000',
  },
});

export default AppStyles;
