 import React, { Component } from 'react';

 export default class Control extends Component {
  constructor(props){
    super(props);
    this.state = {
      titleValue: '',
      bodyValue: ''
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props)
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
          <input type="text"className='titleInput' onChange={this.updateTitle}/>
          <input type="text" className='bodyInput'onChange={this.updateBody}/>
          <button className='submitButton' onClick={this.handleSubmit}>Submit</button>
        </form>
      )
  }
 }