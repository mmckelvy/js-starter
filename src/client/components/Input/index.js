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
      style,
      type,
      name,
      value,
      onChange,
      onKeyDown,
      labelText,
      labelStyle,
      placeholder,
      error,
      disabled,
      isTextArea,
    } = this.props

    const { focused } = this.state

    const defaultStyle = styles(focused, error, disabled)
    const blendedInputStyle = Object.assign({}, defaultStyle.input, style)
    const blendedLabelStyle = Object.assign({}, defaultStyle.label, labelStyle)

    const input = (
      <input
        style={blendedInputStyle}
        type={type}
        name={name}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onFocus={() => this.setState({focused: true})}
        onBlur={() => this.setState({focused: false})}
      />
    )

    const textarea = (
      <textarea
        style={blendedInputStyle}
        type={type}
        name={name}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onFocus={() => this.setState({focused: true})}
        onBlur={() => this.setState({focused: false})}
      />
    )

    const renderedInput = isTextArea ? textarea : input

    if (!labelText) {
      return renderedInput
    }

    return (
      <div>
        <div style={blendedLabelStyle}>{labelText}</div>
        {renderedInput}
      </div>
    )
  }
}

Input.propTypes = {
  style: React.PropTypes.object,
  type: React.PropTypes.string,
  name: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onKeyDown: React.PropTypes.func,
  labelText: React.PropTypes.string,
  labelStyle: React.PropTypes.object,
  placeholder: React.PropTypes.string,
  error: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  isTextArea: React.PropTypes.bool,
}
