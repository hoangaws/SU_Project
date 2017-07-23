import { combineReducers } from 'redux';

import arrWordsReducer from '../reducer/arrWordsReducer';
import isAddingReducer from '../reducer/isAddingReducer';
import * as api from '../reducer/api.reducer';
import * as player from '../reducer/player.reducer';
import * as routes from '../reducer/routes';

const combineReducer = combineReducers({
    // arrWords: arrWordsReducer,
    // isAdding: isAddingReducer,
    ...api, ...player, ...routes
});

export default combineReducer;