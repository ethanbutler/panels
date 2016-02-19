import React    from 'react'

let PanelNav = React.createClass({
  handleClick(){
    this.props.onClick()
  },
  render() {
    return (
      <button
      disabled={this.props.disabled}
      onClick={ this.handleClick }
      className={`panelNav panelNav--${this.props.dir}`}
      >
        {this.props.text}
      </button>
    )
  }
} )

export default PanelNav
