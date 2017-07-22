import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';

import { SideMenu, List, Tabs, Tab, Icon, ListItem, Rating, ButtonGroup, Badge, Button } from 'react-native-elements';
// import SplashScreen from 'react-native-splash-screen';
const Realm = require('realm');

export default class RealmClass extends Component {

    // constructor(props) {
    //     super(props);

    //     let realm = new Realm({
    //         schema: [{ name: 'JsonObject', properties: { question: 'string' } }]
    //     });

    //     fetch('https://firebasestorage.googleapis.com/v0/b/fir-rn-25d9e.appspot.com/o/json%2FRC1-1.json?alt=media&token=6b5b8fdb-3776-4b83-ac0f-03765bd79b3d')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             practice = data;
    //             console.log("c" + practice[0].Question);
    //             realm.write(() => {
    //                 realm.create('JsonObject', { question:  practice[0].Question });
    //             });
    //         });
    // }

    render() {
        let realm = new Realm({
            schema: [{ name: 'JsonObject', properties: { question: 'string' } }]
        });

         fetch('https://firebasestorage.googleapis.com/v0/b/fir-rn-25d9e.appspot.com/o/json%2FRC1-1.json?alt=media&token=6b5b8fdb-3776-4b83-ac0f-03765bd79b3d')
            .then((res) => res.json())
            .then((data) => {
                practice = data;
                console.log("c" + practice[0].Question);
                realm.write(() => {
                    realm.create('JsonObject', { question:  practice[0].Question });
                });
            });
        // realm.write(() => {
        //     realm.create('Dog', { name: 'Rex' });
        //     realm.create('Dog', { name: 'Rex' });
        //     realm.create('Dog', { name: 'Rex' });
        //     realm.create('Dog', { name: 'Rex' });
        //     realm.create('Dog', { name: 'Rex' });
        // });

        return (
            <View>
                <Text>
                    Realm: {realm.objects('JsonObject')[0].question}
                </Text>
            </View>
        );
    }
}