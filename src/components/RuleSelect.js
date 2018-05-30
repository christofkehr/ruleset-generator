import React, { Component } from 'react'
import Select from 'material-ui/Select'
import { FormControl } from 'material-ui/Form'
import { usageOptions as usageOptionTexts } from '../utils/Texts.js'

const usageOptions = [
  {
    value: 'CORE',
    text: usageOptionTexts.core
  },

  {
    value: 'NOT',
    text: usageOptionTexts.not
  },

  {
    value: 'OPTIONAL',
    text: usageOptionTexts.optional
  }
]

class RuleSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.defaultValue || ''
    }
  }

  renderOptions() {
    return usageOptions.map(option => (
      <option key={ option.value } value={ option.value }>
        { option.text }
      </option>
    ))
  }

  onChange = (event) => {
    this.setState({
      value: event.currentTarget.value
    })
  }

  render() {
    const options = this.renderOptions()

    return (
      <FormControl>
        <Select
          native
          value={ this.state.value }
          onChange={ this.onChange }
        >
          <option></option>
          { options }
        </Select>
      </FormControl>
    )
  }
}

export default RuleSelect
