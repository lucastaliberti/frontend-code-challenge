import React from 'react'
import { shallow } from 'enzyme'
import AdContent from '.'

const props = {
  description: 'Gemütliche 1-Zi Wohnung in ruhiger Lage auf dem Sonnenberg',
  location: 'Philippstraße 16, 09130 Chemnitz',
  price: '166.00 €',
  rooms: '1 Zimmer',
  measure: 'ab 37.00m2'
}

const component = shallow(<AdContent {...props} />)
it('It renders the props in the correct tags', () => {
  expect(component.find('.description').text()).toEqual(props.description)
  expect(component.find('.location').text()).toEqual(props.location)
  expect(component.find('.price').text()).toEqual(props.price)
  expect(component.find('.rooms').text()).toEqual(props.rooms)
  expect(component.find('.measure').text()).toEqual(props.measure)
})
