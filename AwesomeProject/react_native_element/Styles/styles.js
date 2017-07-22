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
    optionBlue: {
        color: "blue",
        fontSize: 20
    },
    optionWhite: {
        color: "white",
        fontSize: 20
    },
    optionGreen: {
        color: "green",
        fontSize: 20,
    },
    optionRed: {
        color: "red",
        fontSize: 20,
    },
    optionChoose: {
        fontSize: 20,
        backgroundColor: "blue",
        borderRadius: 3,
    },
    optionNoChoose: {
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
    },

     homeContainer: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 100,
    paddingTop: 64,
    },
  searchInput: {
    height: 20,
    width: width - 150,
    borderBottomWidth: 1,
    borderBottomColor: "#000"
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  header: {
    marginTop: 17,
    marginBottom: 17,
    width: window.width,
  },
  headerClose: {
    position: 'absolute',
    top: 10,
    left: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  downloadButton: {
    position: 'absolute',
    top: 10,
    left: width - 40,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
  },
  headerText: {
    color: "#FFF",
    fontSize: 18,
    textAlign: 'center',
  },
  songImage: {
    marginBottom: 20,
    width: width - 30,
    height: 300
  },
  songImageSmall: {
    width: 45,
    height: 45
  },
  songTitle: {
    color: "white",
    fontFamily: "Helvetica Neue",
    marginBottom: 10,
    marginTop: 13,
    fontSize: 19
  },
  albumTitle: {
    color: "#BBB",
    fontFamily: "Helvetica Neue",
    fontSize: 14,
    marginBottom: 20,
  },
  controls: {
    flexDirection: 'row',
    marginTop: 30,
  },
  back: {
    marginTop: 22,
    marginLeft: 45,
  },
  play: {
    marginLeft: 50,
    marginRight: 50,
  },
  forward: {
    marginTop: 22,
    marginRight: 45,
  },
  shuffle: {
    marginTop: 26,
  },
  volume: {
    marginTop: 26,
  },
  sliderContainer: {
    width: width - 40,
  },
  timeInfo: {
    flexDirection: 'row',
  },
  time: {
    color: '#FFF',
    flex: 1,
    fontSize: 10,
  },
  timeRight: {
    color: '#FFF',
    textAlign: 'right',
    flex: 1,
    fontSize: 10,
  },
  slider: {
    height: 20,
  },
  sliderTrack: {
    height: 2,
    backgroundColor: '#333',
  },
  sliderThumb: {
    width: 10,
    height: 10,
    backgroundColor: '#fff',
    borderRadius: 10 / 2,
    position: 'absolute',
    top: 10
  },
  searchSongContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f0f0"
  },
  downloadSongContainer: {
    width,
    height: 60,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f0f0"
  },
  songView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  songTitleImage: {
    height: 50,
    width: 50
  },
  songTitleContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: 10,
    justifyContent: "space-around"
  },
  songArtistText: {
    fontSize: 16,
    color: "#333"
  },
  songTitleText: {
    fontSize: 12,
    color: "#c8c3c3"
  },
  noPaddingHorizontal: {
    paddingHorizontal: 0
  },
  searchInputView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  searchInputContainer: {
    width,
    height: 60
  },
  downloadButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  fullWidth: {
    width
  },
  playerOverlay: {
    position: 'absolute',
    zIndex: 200,
    bottom: 50,
    width,
    height: 50,
    backgroundColor: '#eaeff7'
  },
  minimizedPlayer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10
  }
})

export default styles;