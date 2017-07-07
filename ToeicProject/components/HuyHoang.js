import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Module1 from "./Module1.js";
import Module2 from "./Module2.js";

export default class HuyHoang extends React.Component{
	constructor(props){
      super(props);
      console.log("Hello contructor HuyHoang");
  }

  componentWillMount(){
      console.log("Hello ComponentWillMount");
  }

  render() {
    console.log("Hello render HuyHoang");
    return (
      <View style={styles.bao}>
        <Text style={{backgroundColor:'yellow', margin: 10}}>Cach 1</Text>
        <Text style={styles.cach2}>Cach 2</Text>
        <Module1 />
        <Module2 />
      </View>
    );
  }

  componentDidMount(){
    console.log("Hello ComponentDidMount");
  }
}

const styles = StyleSheet.create({
  bao:{
    backgroundColor : 'pink',
    flex:1, //ti le phu kin so voi thang cung cap
    flexDirection: "column",// chieu chia flex
  },
  cach2: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor : 'blue',
  },
});