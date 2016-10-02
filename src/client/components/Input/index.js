// external imports
import React, { Component } from 'react'

import styles from './styles'

/**
* Input is assumed to be a "controlled" component, and its parent
* component will handle collecting / submitting data, and passing down
* any error state.
*/
export default class Input extends Component {
  constructor() {
    super()

    this.state = {focused: false}
  }

  render() {
    const {
      inputStyle,
      inputType,
      inputName,
      inputValue,
      handleChange,
      handleKeyDown,
      labelText,
      labelStyle,
      placeholder,
      error,
      disabled,
    } = this.props

    const { focused } = this.state

    const defaultStyle = styles(focused, error, disabled)
    const blendedInputStyle = Object.assign({}, defaultStyle.input, inputStyle)
    const blendedLabelStyle = Object.assign({}, defaultStyle.label, labelStyle)

    const input = (
      <input
        style={blendedInputStyle}
        type={inputType}
        name={inputName}
        value={inputValue}
        disabled={disabled}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => this.setState({focused: true})}
        onBlur={() => this.setState({focused: false})}
      />
    )

    if (!labelText) {
      return input
    }

    return (
      <div>
        <div style={blendedLabelStyle}>{labelText}</div>
        {input}
      </div>
    )
  }
}

Input.propTypes = {
  inputStyle: React.PropTypes.object,
  inputType: React.PropTypes.string,
  inputName: React.PropTypes.string,
  inputValue: React.PropTypes.string,
  handleChange: React.PropTypes.func,
  handleKeyDown: React.PropTypes.func,
  labelText: React.PropTypes.string,
  labelStyle: React.PropTypes.object,
  placeholder: React.PropTypes.string,
  error: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
}
