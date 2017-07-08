import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Alert, Text, Button, TouchableOpacity } from 'react-native';
import { List, ListItem, Icon, Badge } from 'react-native-elements';
import {
    AdMobBanner,
} from 'react-native-admob';
// import { practice } from '../data/RC1/lesson1';
import { connect } from 'react-redux';
import { toggleShowAnswer, toggleTips, toggleChoose, toggleCheck } from '../Redux/action/actionTest';
import styles from '../Styles/styles.js';

class TestContent extends Component {

    constructor(props) {
        super(props);
        fetch('https://firebasestorage.googleapis.com/v0/b/fir-rn-25d9e.appspot.com/o/json%2FRC1-1.json?alt=media&token=6b5b8fdb-3776-4b83-ac0f-03765bd79b3d')
            .then((res) => res.json())
            .then((data) => {
                practice = data;
                console.log("c"+practice[0].Question);
                console.log(practice[1].Question);
                console.log(practice[2].Question);
            });
    }

    _onPressShow() {
        this.props.toggleShowAnswer(this.props.stt);
    }

    _onPressTips() {
        this.props.toggleTips(this.props.stt);
    }

    _choose(id, choose) {
        this.props.toggleChoose(id, choose);
    }

    _check() {
        this.props.toggleCheck(this.props.stt);
    }

    componentWillMount() {
        fetch('https://firebasestorage.googleapis.com/v0/b/fir-rn-25d9e.appspot.com/o/json%2FRC1-1.json?alt=media&token=6b5b8fdb-3776-4b83-ac0f-03765bd79b3d')
            .then((res) => res.json())
            .then((data) => {
                practice = data;
                console.log("w"+practice[0].Question);
                console.log(practice[1].Question);
                console.log(practice[2].Question);
            });
    }

    componentDidMount() {
        fetch('https://firebasestorage.googleapis.com/v0/b/fir-rn-25d9e.appspot.com/o/json%2FRC1-1.json?alt=media&token=6b5b8fdb-3776-4b83-ac0f-03765bd79b3d')
            .then((res) => res.json())
            .then((data) => {
                practice = data;
                console.log(practice[0].Question);
                console.log(practice[1].Question);
                console.log(practice[2].Question);
            });
    }


    render() {
        let display1 = this.props.arrWords[this.props.stt].showTextExplain1 ? `${practice[this.props.stt].ShowExplain}` : '';
        let display2 = this.props.arrWords[this.props.stt].showTextExplain2 ? `${practice[this.props.stt].Tips}` : '';

        return (
            <ScrollView style={styles.scrollview}>


                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Question {practice[this.props.stt].Question} : </Text>
                    <TouchableOpacity style={this.props.arrWords[this.props.stt].checked ? styles.showbutton : styles.hidden} onPress={() => { this._discuss() }}>
                        <Text style={{ fontSize: 20, color: "dodgerblue", backgroundColor: "white", }} >Discuss</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{ fontSize: 20, }}>{`${practice[this.props.stt].Content}`}</Text>

                <View style={styles.button3}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "baseline" }}>

                        <TouchableOpacity onPress={() => { this._choose(this.props.stt, "A") }} disabled={this.props.arrWords[this.props.stt].checked}>
                            <View style={{ backgroundColor: 'rgba(0,0,0,0)' }}>
                                <Text style={this.props.arrWords[this.props.stt].answer === "A" ? styles.optionChoose : styles.optionDefault} > (A) {`${practice[this.props.stt].OptionA}`} </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { this._choose(this.props.stt, "B") }} disabled={this.props.arrWords[this.props.stt].checked}>
                            <Text style={this.props.arrWords[this.props.stt].answer === "B" ? styles.optionChoose : styles.optionDefault}> (B) {`${practice[this.props.stt].OptionB}`} </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { this._choose(this.props.stt, "C") }} disabled={this.props.arrWords[this.props.stt].checked}>
                            <Text style={this.props.arrWords[this.props.stt].answer === "C" ? styles.optionChoose : styles.optionDefault} > (C) {`${practice[this.props.stt].OptionC}`} </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { this._choose(this.props.stt, "D") }} disabled={this.props.arrWords[this.props.stt].checked}>
                            <Text style={this.props.arrWords[this.props.stt].answer === "D" ? styles.optionChoose : styles.optionDefault} > (D) {`${practice[this.props.stt].OptionD}`} </Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity style={this.props.arrWords[this.props.stt].showCheck ? styles.showbutton : styles.hidden}
                            onPress={() => { this._check() }}>
                            <Icon
                                reverse
                                name='ios-color-wand'
                                type='ionicon'
                                color='dodgerblue'
                            />
                        </TouchableOpacity>
                    </View>

                </View>


                <View style={styles.button3}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity style={this.props.arrWords[this.props.stt].checked ? styles.showbutton : styles.hidden} onPress={() => { this._onPressShow() }}>
                            <Text style={{ fontSize: 20, color: "dodgerblue", backgroundColor: "white", }}>ShowExplain</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity style={this.props.arrWords[this.props.stt].checked ? styles.showbutton : styles.hidden} onPress={() => { this._onPressTips() }}>
                            <Text style={{ fontSize: 20, color: "dodgerblue", backgroundColor: "white", }}>Tips</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.textAnswer}>
                    <Text>{display1}{display2}</Text>
                </View>

                <AdMobBanner
                    bannerSize="fullBanner"
                    adUnitID="ca-app-pub-7469861277535029/8882938994"
                    testDeviceID="EMULATOR"
                    didFailToReceiveAdWithError={(err) => { console.log("quang cao that bai" + err); }} />
            </ScrollView>

        );
    }
}

const practice = [];

function mapStateToProps(state) {
    return {
        arrWords: state.arrWords,
        stt: state.isAdding
    };
}

export default connect(mapStateToProps, { toggleShowAnswer, toggleTips, toggleChoose, toggleCheck })(TestContent);
