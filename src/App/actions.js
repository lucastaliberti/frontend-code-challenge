import { DATA_RETRIEVED } from './types'
export const dataRetrieved = data => ({
  type: DATA_RETRIEVED,
  payload: data
})
