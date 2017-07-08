import { combineReducers } from 'redux';

import arrWordsReducer from './arrWordsReducer';
// import filterStatusReducer from './filterStatusReducer';
import isAddingReducer from './isAddingReducer';

const combineReducer = combineReducers({
    arrWords: arrWordsReducer,
    isAdding: isAddingReducer
});

export default combineReducer;