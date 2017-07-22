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


const Realm = require('realm');
class TestContent extends Component {

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

    render() {

        let realm = new Realm({
            schema: [{
                name: 'test6', properties: {
                    Question: 'string',
                    Content: 'string',
                    OptionA: 'string',
                    OptionB: 'string',
                    OptionC: 'string',
                    OptionD: 'string',
                    //Translate: 'string',
                    //ShowExplain: 'string',
                    Answer: 'string'
                }
            }]
        });

        fetch('https://firebasestorage.googleapis.com/v0/b/fir-rn-25d9e.appspot.com/o/json%2FRC1-1.json?alt=media&token=6b5b8fdb-3776-4b83-ac0f-03765bd79b3d')
            .then((res) => res.json())
            .then((data) => {
                // console.log("c" + practice[0].Question);
                realm.write(() => {
                    data.forEach(function (element) {
                        console.log(element.Question);
                        realm.create('test6', {
                            Question: element.Question,
                            Content: element.Content,
                            OptionA: element.OptionA,
                            OptionB: element.OptionB,
                            OptionC: element.OptionC,
                            OptionD: element.OptionD,
                            //Translate: element.Translate,
                            //ShowExplain: element.ShowExplain,
                            Answer: element.Answer
                        });
                    }, this);

                });

                console.log("ahihi"+realm.objects('test6').length);

            })

        let display1 = this.props.arrWords[this.props.stt].showTextExplain1 ? `${realm.objects('test6')[this.props.stt].Translate}` : '';
        let display2 = this.props.arrWords[this.props.stt].showTextExplain2 ? `${realm.objects('test6')[this.props.stt].ShowExplain}` : '';

        return (
            <ScrollView style={styles.scrollview}>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Question {realm.objects('test6')[this.props.stt].Question} :</Text>
                    <TouchableOpacity style={this.props.arrWords[this.props.stt].checked ? styles.showbutton : styles.hidden} onPress={() => { this._discuss() }}>
                        <Text style={{ fontSize: 20, color: "dodgerblue", backgroundColor: "white", }} >Discuss</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{ fontSize: 20, }}>{realm.objects('test6')[this.props.stt].Content}</Text>

                <View style={styles.button3}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "baseline" }}>

                        <TouchableOpacity 
                            onPress={() => { this._choose(this.props.stt, "A") }} 
                            disabled={this.props.arrWords[this.props.stt].checked}
                            style ={
                                this.props.arrWords[this.props.stt].answer === "A" ? styles.optionChoose : styles.optionNoChoose
                            }
                            >
                            <View>
                                <Text 
                                     style={this.props.arrWords[this.props.stt].checked
                                            ? ("A" === `${realm.objects('test6')[this.props.stt].Answer}` 
                                                 ? styles.optionGreen : styles.optionRed
                                                )
                                            :  (this.props.arrWords[this.props.stt].answer === "A" 
                                                ? styles.optionWhite : styles.optionBlue)
                                            }
                                > (A) {realm.objects('test6')[this.props.stt].OptionA} </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            onPress={() => { this._choose(this.props.stt, "B") }} 
                            disabled={this.props.arrWords[this.props.stt].checked}
                            style ={
                                this.props.arrWords[this.props.stt].answer === "B" ? styles.optionChoose : styles.optionNoChoose
                            }
                            >
                            <View>
                                <Text 
                                     style={this.props.arrWords[this.props.stt].checked
                                            ? ("B" === `${realm.objects('test6')[this.props.stt].Answer}` 
                                                 ? styles.optionGreen : styles.optionRed
                                                )
                                            :  (this.props.arrWords[this.props.stt].answer === "B" 
                                                ? styles.optionWhite : styles.optionBlue)
                                            }
                                > (B) {realm.objects('test6')[this.props.stt].OptionB} </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            onPress={() => { this._choose(this.props.stt, "C") }} 
                            disabled={this.props.arrWords[this.props.stt].checked}
                            style ={
                                this.props.arrWords[this.props.stt].answer === "C" ? styles.optionChoose : styles.optionNoChoose
                            }
                            >
                            <View>
                                <Text 
                                     style={this.props.arrWords[this.props.stt].checked
                                            ? ("C" === `${realm.objects('test6')[this.props.stt].Answer}` 
                                                 ? styles.optionGreen : styles.optionRed
                                                )
                                            :  (this.props.arrWords[this.props.stt].answer === "C" 
                                                ? styles.optionWhite : styles.optionBlue)
                                            }
                                > (C) {realm.objects('test6')[this.props.stt].OptionC} </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            onPress={() => { this._choose(this.props.stt, "D") }} 
                            disabled={this.props.arrWords[this.props.stt].checked}
                           style ={
                                this.props.arrWords[this.props.stt].answer === "D" ? styles.optionChoose : styles.optionNoChoose
                            }
                            >
                            <View>
                                <Text 
                                     style={this.props.arrWords[this.props.stt].checked
                                            ? ("D" === `${realm.objects('test6')[this.props.stt].Answer}` 
                                                 ? styles.optionGreen : styles.optionRed
                                                )
                                            :  (this.props.arrWords[this.props.stt].answer === "D" 
                                                ? styles.optionWhite : styles.optionBlue)
                                            }
                                > (D) {realm.objects('test6')[this.props.stt].OptionD} </Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity style={this.props.arrWords[this.props.stt].showCheck 
                        ? styles.showbutton 
                        : styles.hidden}
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


function mapStateToProps(state) {
    return {
        arrWords: state.arrWords,
        stt: state.isAdding
    };
}

export default connect(mapStateToProps, { toggleShowAnswer, toggleTips, toggleChoose, toggleCheck })(TestContent);
