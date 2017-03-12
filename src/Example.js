import React, { PropTypes } from 'react'
import { Combobox } from 'react-input-enhancements'

/**
 * Example
 */
export class Example extends React.Component {
  render = () => {
    return (
      <div>
        <form
          id='form'
          method='post'
          onSubmit={this.props.onSubmit}
          >
          <div>
            <label htmlFor='example-combobox'>Example combobox</label>
            <Combobox
              defaultValue={null}
              options={this.props.options}
              autocomplete
              data-fieldname='example-combobox'
              >
              <input
                type='text'
                id='example-combobox'
                name='example-combobox'
                placeholder='Placeholder'
                className='example-combobox'
              />
            </Combobox>
          </div>
          <button>
            <span>Continue</span>
          </button>
        </form>
      </div>
    )
  }
}

Example.propTypes = {
  options: PropTypes.array,
  onSubmit: PropTypes.func
}

Example.defaultProps = {
  options: [
    {
      value: 'Option 1',
      text: 'Option 1'
    },
    {
      value: 'Option 2',
      text: 'Option 2'
    }
  ],
  onSubmit: () => {}
}

export default Example
