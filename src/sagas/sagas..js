import { all, call, put, takeEvery } from 'redux-saga/effects';
import { UPDATE_SERVERS, UPDATE_SERVERS_STATE, UPDATE_DISKS, UPDATE_DISKS_STATE} from './../constant/constant';
import { RESET_STATE } from '../constant/constant';
import { fetchDiskDetail, fetchServers, fetchServerDetail } from '../actions';

function* watchFetchServers() {
	yield takeEvery(UPDATE_SERVERS, fetchServerEffect);
}

function* watchFetchDisks() {
	yield takeEvery(UPDATE_DISKS, fetchDiskEffect);
}

function* fetchServerEffect () {
	yield put({ type: RESET_STATE });
	const data = yield call(fetchServers);
	yield put({ type: UPDATE_SERVERS_STATE, data });
}

function* fetchDiskEffect (id) {
	yield put({ type: RESET_STATE });
	const server = yield call(fetchServerDetail, id);
	server['_items'][0].disks = yield all(server['_items'][0].disks.map(diskId => call(fetchDiskDetail, diskId)));
	yield put({ type: UPDATE_DISKS_STATE, data: server });
}

export default function* rootSaga() {
	yield all([
		watchFetchServers(),
		watchFetchDisks(),
	]);
}
