import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  clickHandler = () => {
    const newColor = this.props.getColor()
    this.setState({
      color: newColor
    })
  }
  
  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.clickHandler}>
      </div>
    )
  }
  
}
