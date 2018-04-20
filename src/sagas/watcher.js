import {takeLatest} from 'redux-saga/effects';
import {findStudents,registerStudents,loginStudent} from './studentSaga'
export default function* watchFindStudent() {
    yield takeLatest('FETCH_STUDENTS',findStudents);
    yield takeLatest('REGISTER_STUDENT',registerStudents);
    yield takeLatest('LOGIN_USER',loginStudent);
}