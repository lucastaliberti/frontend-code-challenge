import { put, call, takeLatest, all } from 'redux-saga/effects'

import { dataRetrieved, dataRetrieveFailed } from './actions'
import { fetchAdsFromApi, adsDataParser } from './data'

export function* fetchAds() {
  try {
    const json = yield call(fetchAdsFromApi)
    const data = yield call(adsDataParser, json)
    yield put(dataRetrieved(data))
  } catch (error) {
    yield put(dataRetrieveFailed(error))
  }
}

export function* watchFetchAds() {
  yield takeLatest('REQUEST_DATA', fetchAds)
}

export default function* rootSaga() {
  yield all([fetchAds(), watchFetchAds()])
}
