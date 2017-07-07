import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

// import {Routers} from './react_native_element/Routers.js';
import RadarChartScreen from './react_native_element/RadarChartScreen.js';

export default class ToeicProject extends Component {

  render() {
    console.log("Hello render ToeicProject");
    return (
      // <Routers />
      <RadarChartScreen />
    );
  }
}

AppRegistry.registerComponent('ToeicProject', () => ToeicProject);
