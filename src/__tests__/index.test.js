/* eslint-env node, jest */
import React from 'react'
import {shallow} from 'enzyme'
import Hello from '../'

describe('Hello component', () => {
  const component = shallow(<Hello name="starter-stack" />)

  it('prints the given name', () => {
    expect(component.text()).toBe('Hello starter-stack!')
  })
  it('has the write className', () => {
    expect(component.prop('className')).toBe('hello')
  })
})