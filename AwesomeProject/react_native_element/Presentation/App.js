import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import { createStore,applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import thunk from 'redux-thunk';

import combineReducer from '../Redux/helpers/combineReducer';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/FontAwesome.js';
import RadarChartScreen from '../Container/RadarChartScreen.js';
import Test from '../Container/Test.js';
import RealmClass from '../Container/Realm.js';
import ScreenA from './Screen_A.js';

import Player from './Player.js';
import MiniPlayer from './MiniPlayer.js';
import Downloads from './Downloads';
import Search from './Search';


const TabIcon = (props) => <Icon size={24} name={props.name} color={props.selected ? "black" : "#c8c3c3"} />;
const store = createStore(combineReducer,applyMiddleware(thunk));
const RouterWithRedux = connect()(Router);


export default class App extends Component {

    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <Provider store={store}>

                <View style={{ flex: 1 }}>
                    <MiniPlayer />
                    <RouterWithRedux>
                        <Scene key="root" >
                            <Scene key="home" initial tabs={true}>
                                <Scene key="search1" component={RadarChartScreen} hideTabBar={true} title="RadarChartScreen" duration={0} icon={TabIcon} animation="fade" />
                                <Scene key="download1" component={ScreenA} initial
                                    title="ScreenA"
                                    renderLeftButton={() => <Text>asad</Text>}
                                    renderRightButton={() => <Text>+</Text>}
                                    duration={0} icon={TabIcon} animation="fade" />
                                <Scene key="book" component={ScreenA} hideNavBar={true} title="RadarChartScreen" duration={0} icon={TabIcon} animation="fade" />
                                <Scene key="star" component={Test} hideNavBar={true} hideTabBar={true} title="Test" duration={0} icon={TabIcon} animation="fade" />
                                <Scene key="table" component={RealmClass} title="Test" hideNavBar={true} duration={0} icon={TabIcon} animation="fade" />

                                <Scene key="search" component={Search} title="Search" duration={0} icon={TabIcon} animation="fade" />
                                <Scene key="download" component={Downloads} initial title="Downloads" duration={0} icon={TabIcon} animation="fade" />

                            </Scene>
                            <Scene key="player" component={Player} hideNavBar hideTabBar direction="vertical" />
                        </Scene>
                    </RouterWithRedux>
                </View>

            </Provider>
        );
    }
}
