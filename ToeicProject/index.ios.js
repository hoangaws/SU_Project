import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Index from "./Index.js";


export default class ToeicProject extends Component {

  render() {
    console.log("Hello render ToeicProject");
    return (
      <Index />
    );
  }
}

AppRegistry.registerComponent('ToeicProject', () => ToeicProject);
