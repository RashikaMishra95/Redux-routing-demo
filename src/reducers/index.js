import {combineReducers} from 'redux';
import studentReducer from './reducer-student';
import auth from './reducer-auth';
const rootReducer=combineReducers({
    students:studentReducer,
    auth
});
export default rootReducer;