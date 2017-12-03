import { DATA_REQUEST, DATA_RETRIEVED, DATA_RETRIEVE_FAILED } from './types'

export const dataRequest = data => ({
  type: DATA_REQUEST
})

export const dataRetrieved = data => ({
  type: DATA_RETRIEVED,
  payload: data
})

export const dataRetrieveFailed = error => ({
  type: DATA_RETRIEVE_FAILED,
  payload: error
})
