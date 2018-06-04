 import React, { Component } from 'react';

 export default class Control extends Component {
  constructor(){
    super();
    this.state = {
      titleValue: '',
      bodyValue: ''
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.buildCard(this.state.titleValue, this.state.bodyValue)
  }

  updateTitle(e) {
    e.preventDefault();
    let title = e.target.value;
    this.setState({
      titleValue: title
    })
  } 

  updateBody(e) {
    e.preventDefault();
    let body = e.target.value;
    this.setState({
        bodyValue: body
      })
  }

  render() {
    return (
        <form className='control'>
          <input type="text"className='titleInput'/>
          <input type="text" className='bodyInput'/>
          <button className='submitButton' onClick={this.handleSubmit}>Submit</button>
        </form>
      )
  }
 }