import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';

export default class User extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "HELLO"
    }
  }

  render() {
    return (
      <View>
        <Image source={require('../images/hoang.png')}
          style={{ width: 300, height: 240 }} />
        <Image source={{ uri: 'https://fashionthatpays.files.wordpress.com/2014/07/wolverine-x-man.jpg?w=463' }}
          style={{ width: 300, height: 240 }} />

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
        <Text>{this.state.text}</Text>

      </View>
    );
  }

}
