import React from 'react'
import { shallow } from 'enzyme'
import { App } from '../index.js'

const dataRequest = jest.fn()
const props = {
  ads: [
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
  ],
  dataRequest: dataRequest
}

const component = shallow(<App {...props} />)
it('It call the dataRequest uppon mounting', () => {
  expect(dataRequest.mock.calls.length).toBe(1)
})

it('It has the propper classes for styling', () => {
  expect(component.find('.App')).toHaveLength(1)
})

it('It renders the title', () => {
  expect(
    component
      .find('.App-title')
      .first()
      .text()
  ).toEqual('McMakler - frontend code test')
})

it('It renders the card components', () => {
  expect(component.find('AdCard')).toHaveLength(1)
})
