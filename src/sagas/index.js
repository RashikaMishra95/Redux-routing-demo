import {fork} from 'redux-saga/effects';
import watchFindStudent from './watcher';
export default function* startForman() {
    yield fork(watchFindStudent);
}