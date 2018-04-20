import {combineReducers} from 'redux';
import StudentReducer from './reducer-student';
import loginReducer from './reducer-login';
const rootReducer=combineReducers({
    students:StudentReducer,
    loginResponse:loginReducer
});
export default rootReducer;