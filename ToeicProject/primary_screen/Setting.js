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


export default class Setting extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Setting</Text>

        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-7469861277535029/8882938994"
          testDeviceID="EMULATOR"
          didFailToReceiveAdWithError={(err) => { console.log("quang cao that bai" + err); }} />
      </View>
    );
  }

}
