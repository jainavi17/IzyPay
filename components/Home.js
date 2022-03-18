/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import type {Node} from 'react';
import {
  Text,
  View,
  FlatList,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/AppStyles';
import TopActionButton from './TopActionButton';
import {Divider} from '@react-native-material/core';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const topActionsData = [
  {
    name: 'Send',
    icon: 'send',
    type: 'FontAwesome',
  },
  {
    name: 'Receive',
    icon: 'download-outline',
    type: 'Ionic',
  },
  {
    name: 'Top up',
    icon: 'plus',
    type: 'Ant',
  },
];

const Home: () => Node = () => {
  const renderTopActions = ({item}) => (
    <TopActionButton item={item} callback={item.name} />
  );

  const onSuccess = () => {};

  const openQRCodeScanner = () => {
    <QRCodeScanner
      reactivate={true}
      showMarker={true}
      flashMode={RNCamera.Constants.FlashMode.torch}
      onRead={onSuccess}
      topContent={
        <Text style={styles.centerText}>
          Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text>{' '}
          on your computer and scan the QR code to test.
        </Text>
      }
      bottomContent={
        <View>
          <TouchableOpacity style={styles.buttonTouchable} onPress={() => {}}>
            <Text style={styles.buttonTextStyle}>OK. Got it!</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonTouchable} onPress={() => {}}>
            <Text style={styles.buttonTextStyle}>Stop Scan</Text>
          </TouchableOpacity>
        </View>
      }
    />;
  };

  return (
    <View style={{height: '100%'}}>
      <ImageBackground
        source={require('../img/blue_bg.png')}
        resizeMode="cover"
        style={styles.topBanner}>
        <Text style={styles.userName}>YESDINAR</Text>
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
          <View style={{position: 'absolute', width: '100%', height: '100%'}}>
            <Text style={styles.accountBalanceText}>Account Balance</Text>
            <Text style={styles.activeText}>Active</Text>
            <Text style={styles.balanceText}>IQD 12.500.000</Text>
            <Divider style={{margin: 20}} leadingInset={16} color="#EEEEEE" />
            <SafeAreaView style={styles.container}>
              <FlatList
                key={'#'}
                data={topActionsData}
                renderItem={renderTopActions}
                numColumns={3}
                keyExtractor={(item, index) => index.toString()}
              />
            </SafeAreaView>
          </View>
        </LinearGradient>
      </ImageBackground>
      <TouchableOpacity
        accessibilityRole="button"
        style={[
          styles.roundButton,
          {
            position: 'absolute',
            alignSelf: 'center',
            bottom: 1,
            zIndex: 10000,
          },
        ]}
        onPress={openQRCodeScanner}>
        <MaterialCommunityIcons name="qrcode-scan" size={30} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
