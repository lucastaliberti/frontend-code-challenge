import { put, call, takeLatest, all } from 'redux-saga/effects'

import { dataRetrieved, dataRetrieveFailed } from '../actions'
import { fetchAdsFromApi, adsDataParser } from '../data'
import { fetchAds, watchFetchAds } from '../sagas'

it('It dispatch the correct effects', () => {
  const gen = fetchAds()

  expect(gen.next().value).toEqual(call(fetchAdsFromApi))
  expect(gen.next().value).toEqual(call(adsDataParser, undefined))
  expect(gen.next().value).toEqual(put(dataRetrieved()))
})

it('It handles the errors', () => {
  const gen = fetchAds()
  gen.next()

  expect(gen.throw('error').value).toEqual(put(dataRetrieveFailed('error')))
})

it('It watches for the correct action', () => {
  const gen = watchFetchAds()

  expect(gen.next().value).toEqual(takeLatest('REQUEST_DATA', fetchAds))
})
