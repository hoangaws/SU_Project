import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

var DATA = [
    {giangvien:'MRA1',sinhvien:'MRB1'},
    {giangvien:'MRA2',sinhvien:'MRB2'},
    {giangvien:'MRA3',sinhvien:'MRB3'},
    {giangvien:'MRA4',sinhvien:'MRB4'},
    {giangvien:'MRA5',sinhvien:'MRB5'},
    {giangvien:'MRA6',sinhvien:'MRB6'}
];

export default class ListView1 extends React.Component{

    constructor(props){
        super(props);
        this.ds= new ListView.DataSource({rowHasChanged:(r1,r2)=> r1!=r2});
    }

    render() {
        return (
        <View>
            <ListView 
                dataSource={
                    this.ds.cloneWithRows([
                        {nguoi1:'ASD1',nguoi2:'QWE2'},
                        {nguoi1:'QWE1',nguoi2:'TER2'},
                        {nguoi1:'FDF1',nguoi2:'EEE2'}
                    ])
                }
                renderRow={(rowData)=>{
                    return(
                        <View style={{padding:10, borderTopColor:'green'}}>
                            <Text>{rowData.nguoi1}</Text>
                            <Text>{rowData.nguoi2}</Text>
                        </View>
                    )
                }}
            />
            
            <ListView2 />
        </View>
        );
    }
}

export class ListView2 extends React.Component{

    constructor(props){
        super(props);
        var ds= new ListView.DataSource({rowHasChanged:(r1,r2)=> r1!=r2});
        this.state = {
            dataSource:ds.cloneWithRows(DATA)
        };
    }

    taoHang(property){
        return(
            <View style={{padding:10}}>
                <Text  style={{color:'red'}}>
                    {property.giangvien}
                </Text>
                <Text>
                    {property.sinhvien}
                </Text>
            </View>
        );
    }

    render() {
        return (
        <View>
            <ListView 
                dataSource={
                    this.state.dataSource
                }
                renderRow={
                    this.taoHang
                }
            />
        </View>
        );
    }
}