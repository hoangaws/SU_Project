import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet,FlatList } from 'react-native';
import { Tabs, Tab, Icon, Button,ListItem,Rating } from 'react-native-elements'


const list = [
    {
        name: 'Amy Farha1',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President',
        icon: 'av-timer'
    },
    {
        name: 'Chris Jackson2',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman',
        icon: 'flight-takeoff'
    },
    {
        name: 'Amy Farha3',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President',
        icon: 'av-timer'
    },
    {
        name: 'Chris Jackson4',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman',
        icon: 'flight-takeoff'
    },
    {
        name: 'Amy Farha5',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President',
        icon: 'av-timer'
    },
    {
        name: 'Chris Jackson6',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman',
        icon: 'flight-takeoff'
    },
    {
        name: 'Chris Jackson7',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman',
        icon: 'flight-takeoff'
    },
    {
        name: 'Amy Farha8',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President',
        icon: 'av-timer'
    },
    {
        name: 'Chris Jackson9',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman',
        icon: 'flight-takeoff'
    },
    {
        name: 'Chris Jackson10',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman',
        icon: 'flight-takeoff'
    },
    {
        name: 'Amy Farha11',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President',
        icon: 'av-timer'
    },
    {
        name: 'Chris Jackson12',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman',
        icon: 'flight-takeoff'
    },
];

export default class ListLesson extends Component {
    render() {
        return (
            <ScrollView>
                <View>
                    <FlatList
                        data={list}
                        renderItem={({ item,i }) => <ListItem
                                            roundAvatar
                                            key={i}
                                            title={item.name}
                                            badge={{ value: 3, badgeTextStyle: { color: 'orange' }, badgeContainerStyle: { marginTop: -20 } }}
                                            subtitle={
                                                <Rating type="heart"
                                                    readonly
                                                    fractions={5}
                                                    startingValue={4}
                                                    imageSize={25}
                                                />}
                                            avatar={{ uri: item.avatar_url }}
                                        />}
                        keyExtractor={item => item.name}
                    />
                </View>
            </ScrollView>
        );
    }
}
