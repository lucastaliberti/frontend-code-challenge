import React from 'react'
import { shallow } from 'enzyme'
import TypeButton from '.'

const component = shallow(<TypeButton type="Mieten" />)
it('It renders the text from type prop', () => {
  expect(component.text()).toEqual('Mieten')

  component.setProps({ type: 'Kaufen' })
  expect(component.text()).toEqual('Kaufen')
})

it('It has the proper class for styling', () => {
  expect(component.find('div').hasClass('TypeButton')).toBeTruthy()
})
