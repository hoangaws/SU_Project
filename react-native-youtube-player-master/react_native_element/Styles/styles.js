import { StyleSheet, Dimensions } from 'react-native';

let { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        flex: 0.1,
        left: 0,
        right: 0,
        bottom: 0,
        height: 58,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#949090'
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    mainviewStyle: {
        flex: 1,
        flexDirection: 'column',
    },

    scrollview: {
        margin: 15,
    },

    hidden: {
        width: 0,
        height: 0
    },
    showbutton: {
    },
    optionDefault: {
        fontSize: 20,
        color: "#0060cd",
    },
    optionChoose: {
        fontSize: 20,
        color: "white",
        backgroundColor: "#0060cd",
        borderRadius: 3,
    },
    button2: {
        marginTop: 20,
        justifyContent: 'space-between'
    },
    button3: {
        marginTop: 20,
        flexDirection: 'row',
    },
    textAnswer: {

    },
    admob: {
        flex: 0.1,
        left: 0,
        right: 0,
        bottom: 0,
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
    },

    functionStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    }
})

export default styles;