import reducer, { INITIAL_STATE } from '../reducer'
import { dataRetrieved } from '../actions'

const dummyAction = {
  type: 'DUMYY',
  payload: {
    dummy: 'dummy'
  }
}

const payload = [
  {
    type: 'Mieten',
    image:
      'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/573379e18ffd7c64368b4568_variant_asset5829e70a6bc59_inventoryM.jpg',
    description: 'Gemütliche 1-Zi Wohnung in ruhiger Lage auf dem Sonnenberg',
    location: 'Philippstraße 16, 09130 Chemnitz',
    price: '166.00 €',
    rooms: '1 Zimmer',
    measure: 'ab 37.00m2'
  }
]

it('It returns the state on default', () => {
  expect(reducer(INITIAL_STATE, dummyAction)).toEqual(INITIAL_STATE)
})

it('It adds the payload to the state', () => {
  expect(reducer(INITIAL_STATE, dataRetrieved(payload))).toEqual({
    ads: payload
  })
})
