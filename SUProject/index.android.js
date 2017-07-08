import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect, Provider } from 'react-redux';
// import { Scene, Router } from 'react-native-router-flux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Listening from './screen/listening.js';
import Reading from './screen/reading.js';

const reducer = (state = defaultState, action) => {
  if (action.type === 'CLICK_CHECK') return {
    stt: state.stt, showCheck: !state.showCheck, showExplain: !state.showExplain,
    showDiscuss: !state.showDiscuss, showTextExplain1: state.showTextExplain1, showTextExplain2: state.showTextExplain2
  };
  if (action.type === 'CLICK_CHOOSE') return {
    stt: state.stt, showCheck: true, showExplain: state.showExplain,
    showDiscuss: state.showDiscuss, showTextExplain1: state.showTextExplain1, showTextExplain2: state.showTextExplain2
  };
  if (action.type === 'CLICK_SHOW') return {
    stt: state.stt, showCheck: state.showCheck, showExplain: state.showExplain,
    showDiscuss: state.showDiscuss, showTextExplain1: !state.showTextExplain1, showTextExplain2: false
  };
  if (action.type === 'CLICK_TIPS') return {
    stt: state.stt, showCheck: state.showCheck, showExplain: state.showExplain,
    showDiscuss: state.showDiscuss, showTextExplain1: false, showTextExplain2: !state.showTextExplain2
  };
  if (action.type === 'NEXT') return {
    stt: state.stt + 1, showCheck: state.showCheck, showExplain: state.showExplain,
    showDiscuss: state.showDiscuss, showTextExplain1: state.showTextExplain1, showTextExplain2: state.showTextExplain2
  };
  if (action.type === 'PRE') return {
    stt: state.stt - 1, showCheck: state.showCheck, showExplain: state.showExplain,
    showDiscuss: state.showDiscuss, showTextExplain1: state.showTextExplain1, showTextExplain2: state.showTextExplain2
  };
  return state;
};
const store = createStore(reducer, applyMiddleware(thunk));
const RouterWithRedux = connect()(Router);

const TabIcon = (props) => <Icon size={24} name={props.name} color={props.selected ? "black" : "#c8c3c3"} />;


export default class SUProject extends Component {
  render() {
    return (
      <Provider store={store} >
        
        <View style={{ flex: 1 }}>

          <RouterWithRedux>
            <Scene key="root">
              <Scene key="home" initial tabs={true}>
                <Scene key="search" component={Listening} title="Search" duration={0} icon={TabIcon} animation="fade" />
                <Scene key="download" component={Reading} initial title="Downloads" duration={0} icon={TabIcon}  animation="fade" />
              </Scene>
            </Scene>
          </RouterWithRedux>

        </View>

      </Provider>
    );
  }
}

AppRegistry.registerComponent('SUProject', () => SUProject);
