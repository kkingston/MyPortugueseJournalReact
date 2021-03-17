import React from 'react';

export default class EntryForm extends React.Component {

  state = {
    content: '',
    date: ''
  }

  handleChange = (event, fieldName) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    //this.setState({date: event.target.value})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <br />
        <hr />
        <br />
        <h4 className="center">Create New Entry</h4>
        <label for="content">Write about the word of the day:</label>
        <textarea  value={this.state.content} 
                  onChange={this.handleChange} 
                  name="content"
                  type="text" 
                  id="content"/>
        <input value={this.state.date} 
                  onChange={this.handleChange} 
                  type="date"
                  name="date" />
        <button class="waves-effect  cyan darken-2 btn-small" type="submit" name="action">Submit
          <i class="material-icons right">send</i>
        </button>
        

      </form>
    )
  }


}