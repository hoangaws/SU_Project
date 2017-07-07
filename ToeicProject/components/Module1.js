import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {HomeStack} from './Router.js';

export default class Module1 extends React.Component{

  constructor(props){
      super(props);
      console.log("Hello contructor Module1");
      this.state={
        somayman:888
      };
    }

    clickMe(){
      console.log("Click so may man");
      this.setState({
        somayman: this.state.somayman + 1
      });
    }

  render() {
    console.log("Hello render Module1");
    return (
      <View style={styles.view1}>
         <Text style={{fontSize:100}}>{this.state.somayman}</Text>
         <TouchableOpacity onPress={()=>{this.clickMe()}}>
            <View style={{width:100,height:20,backgroundColor:'white'}}>
              <Text style={{fontSize:15}}>Nhấn</Text>
            </View>
         </TouchableOpacity>

      </View>
    );
  }

}


const styles = StyleSheet.create({
  view1: {
    flex:2,
    backgroundColor : '#8BE9FD',
  },
});