import { DATA_REQUEST, DATA_RETRIEVED, DATA_RETRIEVE_FAILED } from '../types'
import { dataRequest, dataRetrieved, dataRetrieveFailed } from '../actions'

it('It represents the correct action', () => {
  expect(dataRequest()).toEqual({
    type: DATA_REQUEST
  })

  const data = {
    data: [
      {
        key: 'value'
      }
    ]
  }
  expect(dataRetrieved(data)).toEqual({
    type: DATA_RETRIEVED,
    payload: data
  })

  const error = {
    code: 100,
    msg: "I'm a dummy message"
  }
  expect(dataRetrieveFailed(error)).toEqual({
    type: DATA_RETRIEVE_FAILED,
    payload: error
  })
})
