import {put,call} from 'redux-saga/effects';
import {
    fetchStudents,registerStudent,loginService
} from '../API/api'

export function* findStudents() {
    try {
        debugger
        const students=yield call(fetchStudents);
        yield put({type:'FETCH_STUDENT',students});
    }catch(err){
        yield put({type:'FETCH_STUDENT_ERROR',students:[]})
    }
}
export function* registerStudents({payload}) {
    //debugger;
    try {
        const student=yield call(registerStudent(payload));
        yield [
            put({type:'NEW_STUDENT',student})
        ];
    }catch(err){
        yield put({type:'NEW_STUDENT_ERROR',student:{}})
    }
}
export function* loginStudent({payload}) {
    //debugger;
    try {
        const response=yield call(loginService,payload);
        yield [
            put({type:'LOGIN',response})
        ];

    }catch(err){
        yield put({type:'LOGIN_ERROR',response:{}})
    }
}