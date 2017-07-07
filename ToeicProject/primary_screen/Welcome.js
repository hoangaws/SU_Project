import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import { List, ListItem, Button } from 'react-native-elements';
import { users } from '../config/data';
import FacebookTabBar from './FacebookTabBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import SplashScreen from 'react-native-splash-screen';
import {
    AdMobBanner,
} from 'react-native-admob';

export default class Welcome extends Component {

    static navigationOptions = {
        title: 'Welcome Screen',
        titleStyle: {
            color: '#fefefe',
            justifyContent: 'space-between',
            textAlign: 'center'
        },
        headerTintColor: 'red',
        headerRight: <TouchableOpacity tabLabel="md-pause">
            <Image source={require('../images/hoang.png')} style={{ width: 40, height: 40 }} />
        </TouchableOpacity>,
    };

    clickMe() {
        this.props.navigation.navigate('Setting_s');
    }

    componentDidMount() {
        SplashScreen.hide();
        // this.props.navigation.setParams({
        //     handleFilterPress: this._handleFilterPress.bind(this)
        // });
    }

    _handleFilterPress() {
        // do something
    }

    render() {
        const { navigate } = this.props.navigation;
        return <ScrollableTabView initialPage={2} renderTabBar={() => <FacebookTabBar />}
            tabBarPosition="bottom" //locked={true}
        >
            <ScrollView tabLabel="ios-bonfire">
                <View>
                    <Text>Vocabulary </Text>

                </View>
            </ScrollView>
            <ScrollView tabLabel="ios-bulb" color="red">
                <View>
                    <Text>Tips</Text>
                </View>
            </ScrollView>
            <ScrollView tabLabel="ios-eye">
                <View>
                    <ScrollView>
                        <List>
                            {users.map((user) => (
                                <ListItem
                                    key={user.login.username}
                                    avatar={{ uri: user.picture.thumbnail }}
                                    title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
                                    subtitle={user.email}
                                    onPress={() => navigate('Test_Screens', { ...user })}
                                />
                            ))}
                        </List>
                    </ScrollView>
                </View>

            </ScrollView>
            <ScrollView tabLabel="ios-headset">
                <View>
                    <ScrollView>
                        <List>
                            {users.map((user) => (
                                <ListItem
                                    key={user.login.username}

                                    avatar={{ uri: user.picture.thumbnail }}
                                    title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
                                    subtitle={user.email}
                                    onPress={() => navigate('Test_Screens', { ...user })}
                                />
                            ))}
                        </List>
                    </ScrollView>
                </View>
            </ScrollView>
            <ScrollView tabLabel="ios-ribbon">
                <View>
                    <ScrollView>
                        <List>
                            <ListItem
                                key="VOTE"

                                avatar={{ uri: "https://fashionthatpays.files.wordpress.com/2014/07/wolverine-x-man.jpg?w=463" }}
                                title="Đánh giá"
                                subtitle="--Vote--"
                                onPress={() => navigate('Setting_s')}
                            />
                            <ListItem
                                key="INTRODUCE"

                                avatar={{ uri: "https://fashionthatpays.files.wordpress.com/2014/07/wolverine-x-man.jpg?w=463" }}
                                title="Giới thiệu"
                                subtitle="Introdure"
                                onPress={() => navigate('Setting_s')}
                            />
                            <ListItem
                                key="SETTING"

                                avatar={{ uri: "https://fashionthatpays.files.wordpress.com/2014/07/wolverine-x-man.jpg?w=463" }}
                                title="Cài Đặt"
                                subtitle="--Setting--"
                                onPress={() => navigate('Setting_s')}
                            />
                            <ListItem
                                key="INTRODUCE1"

                                avatar={{ uri: "https://fashionthatpays.files.wordpress.com/2014/07/wolverine-x-man.jpg?w=463" }}
                                title="Giới thiệu"
                                subtitle="Introdure"
                                onPress={() => navigate('Setting_s')}
                            />
                            <ListItem
                                key="SETTING1"

                                avatar={{ uri: "https://fashionthatpays.files.wordpress.com/2014/07/wolverine-x-man.jpg?w=463" }}
                                title="Cài Đặt"
                                subtitle="--Setting--"
                                onPress={() => navigate('Setting_s')}
                            />
                        </List>
                        <Text>Hãy click</Text>
                        <AdMobBanner
                            bannerSize="fullBanner"
                            adUnitID="ca-app-pub-7469861277535029/8882938994"
                            testDeviceID="EMULATOR"
                            didFailToReceiveAdWithError={(err) => { console.log("quang cao that bai" + err); }} />
                    </ScrollView>
                </View>
            </ScrollView>
        </ScrollableTabView>;
    }


};