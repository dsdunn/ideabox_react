 import React, { Component } from 'react';

 export default class Control extends Component {
  constructor(props){
    super(props);
    this.state = {
      titleValue: '',
      bodyValue: '',
      id: ''
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let title = this.state.titleValue;
    let body = this.state.bodyValue;
    let id = new Date();
    this.props.buildCard(title, body, id);
    document.querySelector('.titleInput').value = '';
    document.querySelector('.bodyInput').value = '';
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
          <input type="text"className='titleInput' onChange={this.updateTitle}/>
          <input type="text" className='bodyInput'onChange={this.updateBody}/>
          <button className='submitButton' onClick={this.handleSubmit}>Submit</button>
        </form>
      )
  }
 }