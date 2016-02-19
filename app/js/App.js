import React    from 'react'
import Panel    from './components/Panel'
import Radio    from './components/Radio'
import Form     from './form'

let App = React.createClass( {
  getInitialState(){
    return {
      favoriteColor: '',
      favoriteTeam: '',
      currentPanel: 0,
    }
  },
  componentDidMount(){
    document.title = Form[this.state.currentPanel].title
  },
  componentDidUpdate(){
    document.title = Form[this.state.currentPanel].title
  },
  goBackward(){
    console.log( 'feels like we only go backwards' );
    this.setState( { currentPanel: this.state.currentPanel-1 } )
  },
  goForward(){
    console.log( 'let\'s push things forward' )
    this.setState( { currentPanel: this.state.currentPanel+1 } )
  },
  logRadio( prop, val ){
    this.goForward()
    this.setState( { [prop]: val } )
  },
  logInput( prop, event ){
    if( event && event.which == 13 ){
      this.goForward()
      return
    }
    if( event && event.target.type === 'text' ){ //account for focus state remaining on other types
      this.setState( { [prop]: event.target.value } )
    }
  },
  render() {
    return (
      <div>
        <ul className='panels'>
          {Form.map(( panel, i ) => {
            return <Panel
              key={i}
              index={i}
              title={panel.title}
              text={panel.text}
              total={Form.length}
              currentPanel={this.state.currentPanel}
              goForward={this.goForward}
              goBackward={this.goBackward}
            >
              {
                panel.form && panel.form.type === 'radio'
                ? panel.form.buttons.map(( formItem, j ) => {
                    return <Radio
                            key={j}
                            val={formItem.val}
                            label={formItem.label}
                            onChange={this.logRadio.bind(null, panel.form.setState, formItem.label ) }
                           />
                  })
                : ''
              }
              {
                panel.form && panel.form.type === 'input'
                ? <input onKeyUp={ event => this.logInput( panel.form.setState, event ) } />
                : ''
              }
            </Panel>
          })}
        </ul>
        <ul className='answers'>
          <li>Current Panel: {this.state.currentPanel+1}</li>
          <li>Favorite Color: {this.state.favoriteColor}</li>
          <li>Favorite NBA Team: {this.state.favoriteTeam}</li>
        </ul>
      </div>
    )
  }
} )

export default App
