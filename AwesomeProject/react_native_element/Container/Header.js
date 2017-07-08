import React, { Component } from 'react';
import { View, Text,ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Tabs, Tab, Icon, Button } from 'react-native-elements'

export default class Header extends Component {
    render() {
        return (
            
                <ScrollView horizontal={true}>
                    <Button
                        icon={{ name: 'cached' }}
                        title='Reading' />
                    <Button
                        icon={{ name: 'cached' }}
                        title='Listening' />
                    <Button
                        icon={{ name: 'cached' }}
                        title='Reading' />
                    <Button
                        icon={{ name: 'cached' }}
                        title='Listening' />
                </ScrollView>
        );
    }
}
