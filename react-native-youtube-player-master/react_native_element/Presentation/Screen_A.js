import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';

// import { Tabs, Tab, Icon, Button } from 'react-native-elements'


export default class ScreenA extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         hideTabBar: true,
    //     }
    // }

    // hideTabBar(value) {
    //     this.setState({
    //         hideTabBar: value
    //     });
    // }
    render() {
        // let tabBarStyle = {};
        // let sceneStyle = {};
        // if (this.state.hideTabBar) {
        //     tabBarStyle.height = 0;
        //     tabBarStyle.overflow = 'hidden';
        //     sceneStyle.paddingBottom = 0;
        // }
        return (
            <View style={{ flex: 1 ,backgroundColor:"red"}}>
               <Text style={{color: 'red'}}>
          and redsdsds
          dsdfwerewr
          edfwefwew
          wefewfwefwe
          werwerwerwe
          werewfrwefwefwe
          erwerwerwe
        </Text>
                {/*<TouchableOpacity
                    title='BUTTON' />

                <TouchableOpacity
                    raised
                    icon={{ name: 'cached' }}
                    title='BUTTON WITH ICON' />

                <TouchableOpacity
                    large
                    iconRight
                    icon={{ name: 'code' }}
                    title='LARGE WITH RIGHT ICON' />

                <TouchableOpacity
                    large
                    icon={{ name: 'envira', type: 'font-awesome' }}
                    title='LARGE WITH RIGHT ICON' />

                <TouchableOpacity
                    large
                    icon={{ name: 'squirrel', type: 'octicon' }}
                    title='OCTICON' />*/}
            </View>
        )
    }
}