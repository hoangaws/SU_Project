import * as musicActions from '../action/music.actions';
import * as searchActions from '../action/search.actions';
import * as playerActions from '../action/player.actions';

export default {...musicActions, ...searchActions, ...playerActions};
