import React    from 'react'
import PanelNav   from './PanelNav'

let Panel = React.createClass({
  render() {
    return (
      <li
      className={ 'panel ' +
        `panel--${this.props.index+1} ` +
        ( this.props.index === this.props.currentPanel ? 'active' : '' )
      }
      >
        <h2>Tell Us Your {this.props.title}.</h2>
        <p>{this.props.text}</p>
        <PanelNav
        text='<'
        dir='back'
        onClick={ this.props.goBackward }
        disabled={ this.props.index === 0 }
        />
        <PanelNav text='>'
        dir='forward'
        onClick={ this.props.goForward }
        disabled={ this.props.index === this.props.total-1 }
        />
        {this.props.children}
      </li>
    )
  }
} )

export default Panel
