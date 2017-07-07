import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {
  AdMobBanner,
} from 'react-native-admob';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Practice extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Practice</Text>

        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-7469861277535029/8882938994"
          testDeviceID="EMULATOR"
          didFailToReceiveAdWithError={(err) => { console.log("quang cao that bai" + err); }} />

        <Icon name="ios-person" size={30} color="#4F8EF7" />
      </View>
    );
  }

}
