import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class Home extends React.Component{

    // static navigationOptions = {
    //   title: 'Trang chu'
    // }

  render() {

    const { navigate } = this.props.navigation;
    return (
      <View style={{flex:1, justifyContent: 'center',alignItems:'center'}}>
         <TouchableOpacity onPress={() => navigate('ManHinh_Detail',{thamso:'Huy Hoang 888'})} style={{backgroundColor: 'green'}}>
            <Text style={{color:"#fff",fontSize:20,padding:10}}>Go to Detail</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => navigate('ManHinh_User')} style={{backgroundColor: 'green'}}>
            <Text style={{color:"#fff",fontSize:20,padding:10}}>Go to User</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => navigate('DrawerOpen')} style={{backgroundColor: 'red'}}>
            <Text style={{color:"#fff",fontSize:20,padding:10}}>Go to Menu</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => navigate('ManHinh_HuyHoang')} style={{backgroundColor: 'green'}}>
            <Text style={{color:"#fff",fontSize:20,padding:10}}>Go to Huy Hoang</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => navigate('ManHinh_ListView')} style={{backgroundColor: 'green'}}>
            <Text style={{color:"#fff",fontSize:20,padding:10}}>ListView</Text>
         </TouchableOpacity>
      </View>

    );
  }

}
