import React from 'react'
import { shallow } from 'enzyme'
import AdCard from '.'

const props = {
  type: 'Mieten',
  image:
    'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/573379e18ffd7c64368b4568_variant_asset5829e70a6bc59_inventoryM.jpg',
  description: 'Gemütliche 1-Zi Wohnung in ruhiger Lage auf dem Sonnenberg',
  location: 'Philippstraße 16, 09130 Chemnitz',
  price: '166.00 €',
  rooms: '1 Zimmer',
  measure: 'ab 37.00m2'
}

const component = shallow(<AdCard ad={props} />)
it('It renders with the correct class', () => {
  expect(component.find('div.AdCard')).toHaveLength(1)
})

it('It renders the correct child components', () => {
  expect(component.find('TypeButton')).toHaveLength(1)
  expect(component.find('img')).toHaveLength(1)
  expect(component.find('AdContent')).toHaveLength(1)
})

it('It renders the correct image', () => {
  expect(component.find('img').prop('src')).toEqual(props.image)
})
