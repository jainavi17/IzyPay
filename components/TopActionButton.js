/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import type {Node} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../styles/AppStyles';

const TopActionButton = props => {
  const callTopAction = (callback: string) => {
    console.log('Yahoo!');
    return;
  };

  const getTopActionIcon = (item: Object): Node => {
    if (item.type === 'FontAwesome') {
      return <FontAwesome name="send" size={28} color="#38A0FF" />;
    } else if (item.type === 'Ionic') {
      return <Ionicons name="download-outline" size={28} color="#38A0FF" />;
    } else if (item.type === 'Ant') {
      return <AntDesign name="plus" size={28} color="#38A0FF" />;
    } else {
      return <></>;
    }
  };

  return (
    <View style={{width: '33.33%'}}>
      <TouchableOpacity
        style={{
          width: 70,
          height: 70,
          backgroundColor: '#F6F6F9',
          marginLeft: 20,
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => callTopAction(props.callback)}>
        {getTopActionIcon(props.item)}
      </TouchableOpacity>
      <Text style={styles.topActionText}>{props.item.name}</Text>
    </View>
  );
};

export default TopActionButton;
