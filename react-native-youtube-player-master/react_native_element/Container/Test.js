import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Alert, Text, Button, TouchableOpacity } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';
import {
  AdMobBanner,
} from 'react-native-admob';
import { practice } from '../data/RC1/lesson1';
import TestFooter from './TestFooter';
import TestContent from './TestContent';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import combineReducer from '../Redux/reducer/combineReducer';
import styles from '../Styles/styles.js';

// const store = createStore(combineReducer);

class UserDetail extends Component {

  static navigationOptions = {
    title: 'Test 123',
    headerTintColor: 'blue',
    headerRight: <Icon name='settings' color='#517fa4'
      size={33} containerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />,
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      // <Provider store={store}>
        <View style={styles.mainviewStyle}>
          <TestContent />
          <TestFooter />
        </View>
      // </Provider>
    );
  }
}
export default UserDetail;
