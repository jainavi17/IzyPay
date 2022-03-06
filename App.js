/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  FlatList,
  ImageBackground,
  TextInput,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const topActionsData = [
  {
    name: 'Send',
    icon: 'send',
  },
  {
    name: 'Receive',
    icon: 'download-outline',
  },
  {
    name: 'Top up',
    icon: 'plus',
  },
];

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const renderTopActions = ({item}) => <Text>{item.name}</Text>;

  return (
    <ScrollView>
      <View style={{height: '100%'}}>
        <ImageBackground
          source={require('./img/blue_bg.png')}
          resizeMode="cover"
          style={styles.topBanner}>
          <Text style={styles.userName}>Avinash</Text>
          <Icon
            name="notifications"
            size={22}
            color="#FFFFFF"
            style={{textAlign: 'right', right: '5%'}}
          />
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#FFFFFF', '#FFFFFF']}
            style={{
              width: '90%',
              height: 236,
              borderRadius: 25,
              marginTop: 20,
              left: '5%',
            }}>
            {/* <Image
              source={require('./img/Shape.png')}
              style={{alignSelf: 'flex-end'}}
            /> */}
            <View style={{position: 'absolute', width: '100%', height: '100%'}}>
              <Text
                style={{
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
                }}>
                Account Balance
              </Text>
              <Text
                style={{
                  right: '5%',
                  lineHeight: 20,
                  fontFamily: 'IBM Plex Mono',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  fontSize: 15,
                  color: '#38A0FF',
                  textAlign: 'right',
                  letterSpacing: -0.24,
                }}>
                Active
              </Text>
              <Text
                style={{
                  left: '5%',
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  fontSize: 20,
                  lineHeight: 24,
                  color: '#000000',
                }}>
                IQD 12.500.000
              </Text>
              <View
                style={{
                  marginTop: 20,
                  width: '90%',
                  alignSelf: 'center',
                  borderBottomColor: '#EEEEEE',
                  borderBottomWidth: 1,
                }}
              />
              <FlatList
                key={'#'}
                data={topActionsData}
                renderItem={renderTopActions}
                numColumns={3}
                keyExtractor={(item, index) => index}
              />
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
      <Text>asdadasdas</Text>
      <Text>asdadasdas</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
    // justifyContent: 'center',
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
});

export default App;
