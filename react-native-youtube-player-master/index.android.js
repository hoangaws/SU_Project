// import './src';
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './react_native_element/Presentation/App.js';

const YoutubePlayer = () => <App />;

AppRegistry.registerComponent('YoutubePlayer', () => YoutubePlayer);
