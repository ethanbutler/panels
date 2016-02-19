import React    from 'react'

let Radio = React.createClass({
  handleChange(){
    this.props.onChange()
  },
  render() {
    return (
      <span className="radioGroup">
        <input
        type='radio'
        name='group'
        id={`group-${this.props.val}`}
        value={this.props.val}
        onChange={this.handleChange}
        />
        <label
        htmlFor={`group-${this.props.val}`}
        >
          {this.props.label}
        </label>
      </span>
    )
  }
} )

export default Radio
