import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';
import styles from '../Styles/styles.js';
import Header from '../Container/Header.js';
import ListLesson from '../Container/ListLesson.js';

export default class ScreenA extends Component {

    render() {
        return (
            <View style={{ marginTop: 0, marginBottom: 55, borderTopWidth: 0, borderBottomWidth: 0}}>
                <Header />
                <ListLesson />
            </View>
        )
    }
}