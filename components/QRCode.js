/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/AppStyles';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const QRCode = props => {
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
  );
};

export default QRCode;
