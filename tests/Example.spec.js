import React from 'react'
import { shallow } from 'enzyme'
import Example from 'Example'

const enzymeShallowWithProps = (props = {}) => {
  return shallow(<Example {...props} />)
}

describe('(form) Example', () => {
  let _enzymeWrapper, _spies, _props
  beforeEach(() => {
    _spies = {
      onSubmit: sinon.spy()
    }
    _props = {
      onSubmit: _spies.onSubmit
    }
    _enzymeWrapper = enzymeShallowWithProps(_props)
  })
  it('should render as a <div> with a <form>.', () => {
    expect(_enzymeWrapper.type()).to.equal('div')
    expect(_enzymeWrapper.find('form')).to.have.length(1)

    describe('<form>', () => {
      it('should contain the correct inputs.', () => {
        expect(_enzymeWrapper.find('input[name="example-combobox"]')).to.have.length(1)
      })
      it('should call onSubmit prop method on submit.', () => {
        _spies.onSubmit.should.have.not.been.called
        _enzymeWrapper.find('#form').simulate('submit')
        _spies.onSubmit.should.have.been.called
      })
    })
  })
})
