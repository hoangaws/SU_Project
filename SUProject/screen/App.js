import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

// import combineReducer from '../Redux/reducer/combineReducer';
// import SplashScreen from 'react-native-splash-screen';
// import Icon from 'react-native-vector-icons/FontAwesome.js';
import Listening from './listening.js';
import Reading from './reading.js';
// import { Tabs, Tab, Icon, Button } from 'react-native-elements'

const defaultstate = {
  stt: 0
}
const reducer = (state = defaultstate, action) => {

}

const TabIcon = (props) => <Text name="search123" color="#c8c3c3" size={35} />
// <Icon size={24} name={props.name} color={props.selected ? "black" : "#c8c3c3"} />;
const store = createStore(reducer);
const RouterWithRedux = connect()(Router);


export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            {/* Tab Container */}
            <Scene
              key="tabbar"
              tabs={true}
              tabBarStyle={{ backgroundColor: '#FFFFFF' }}
            >
              {/* Tab and it's scenes */}
              <Scene key="osu" title="OSU" icon={TabIcon}>
                <Scene
                  key="scarlet"
                  component={Reading}
                  title="Scarlet"
                />
                <Scene
                  key="gray"
                  component={Reading}
                  title="Gray"
                />
              </Scene>

              {/* Tab and it's scenes */}
              <Scene key="um" title="UM" icon={TabIcon}>
                <Scene
                  key="blue"
                  component={Reading}
                  title="Blue"
                />
                <Scene
                  key="maize"
                  component={Reading}
                  title="Maize"
                />
              </Scene>

              {/* Tab and it's scenes */}
              <Scene key="vu" title="VU" icon={TabIcon}>
                <Scene
                  key="gold"
                  component={Reading}
                  title="Gold"
                />
                <Scene
                  key="black"
                  component={Reading}
                  title="Black"
                />
              </Scene>
            </Scene>

            <Scene
              key="modal"
              direction="vertical"
              component={Reading}
              title="Modal"
              hideNavBar
            />
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}

let style = StyleSheet.create({
  tabBarStyle: {
    borderColor: '#b7b7b7',
    backgroundColor: 'black',
    borderBottomWidth: 1
  }
});

