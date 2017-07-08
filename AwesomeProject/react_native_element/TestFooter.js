import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Alert, Text, Button, TouchableOpacity } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import {toggleNext,togglePre} from './redux/action/actionTest';
import styles from './Styles/styles.js';

class TestFooter extends Component {

    _next() {
        if (this.props.stt < 51) {
            this.props.toggleNext();
        }
    }

    _pre() {
        if (this.props.stt > 0) {
            this.props.togglePre();
        }
    }

    _close() {

    }

    render() {
        return (
            <View style={styles.footer}>

                <Icon containerStyle={styles.button}
                    name='event-note'
                    color='blue'
                    size={33}
                    onPress={() => navigate('C_Screens')}
                />

                <Icon containerStyle={styles.button}
                    name='fast-rewind'
                    color='blue'
                    size={33}
                    onPress={() => this._pre()}
                />

                <Icon containerStyle={styles.button}
                    name='fast-forward'
                    color='blue'
                    size={33}
                    onPress={() => this._next()}
                />

                <Icon containerStyle={styles.button}
                    name='playlist-add-check'
                    color='blue'
                    size={33}
                    onPress={() => console.log('hello3')}
                />

            </View>
        )
    }
}


function mapStateToProps(state) {
    return {
        stt: state.isAdding
    };
}
export default connect(mapStateToProps,{toggleNext,togglePre})(TestFooter);