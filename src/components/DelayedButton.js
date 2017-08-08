import React from 'react'

export default class DelayedButton extends React.Component {
  constructor(props){
    super(props)

    this.Clickerino = (event) => {
      event.persist()
      setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
    }
  }

  render(){
    return <button onClick={this.Clickerino}/>
  }
}
