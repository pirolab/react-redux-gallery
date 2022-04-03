import navigationReducer from './navigation';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    navigation : navigationReducer,
})

export default rootReducer;