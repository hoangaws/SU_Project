import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class Module2 extends React.Component{


  render() {
    console.log("Hello render module2");
    return (
        <View style={styles.view2}>
            <View style={styles.dong}>
                <OVuong number="1"/>
                <OVuong number="2" text="ABC"/>
                 <OVuong number="3" text="DEF" />
            </View>
            <View style={styles.dong}>
                <OVuong number="4" text=""/>
                <OVuong number="5" text=""/>
                 <OVuong number="6" text=""/>
            </View>
            <View style={styles.dong}>
                <OVuong number="7" text=""/>
                <OVuong number="8" text=""/>
                 <OVuong number="9" text=""/>
            </View>
            <View style={styles.dong}>
                <OVuong number="" text=""/>
                <OVuong number="0" text=""/>
                 <OVuong number="" text=""/>
            </View>
        </View>
    );
  }

}


class OVuong extends Component {

  	clickMe(){
  		console.log('Ban da click!!!!!');
  	}

	  render() {
	    console.log("Hello render OVuong");
	    return (
	    	<TouchableOpacity style={styles.cot} onPress={()=>{this.clickMe()}}>
		        <Text style={styles.number}>{this.props.number}</Text>
		        <Text>{this.props.text}</Text>
	      	</TouchableOpacity>
	    );
	  }
}

OVuong.propType = {
	number: React.PropTypes.string,
	text: React.PropTypes.string
}


const styles = StyleSheet.create({
  view2: {
    flex:1,
    backgroundColor : 'white',
  },
   dong: {
    flex:1,
    borderBottomWidth:1,
    flexDirection:'row'
  },
  cot: {
    flex:1,
    borderWidth:1,
    borderColor:'blue',
    justifyContent:'center',// can giua theo chieu doc
    alignItems:'center',// can giua theo chieu doc
  },
  number:{
    fontSize:25,
  }
});