import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.initialState = {
          nama: '',
          belakang: '',
        }
    
        this.state = this.initialState
      }

    handleChange = event => {
        const { name, value } = event.target
      
        this.setState({
          [name]: value,
        })
    }
    
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

  render() {
    const { nama, belakang } = this.state;
  
    return (
      <form>
        <label for="nama">Name</label>
        <input
          type="text"
          name="nama"
          id="nama"
          value={nama}
          onChange={this.handleChange} />
        <label for="belakang">Job</label>
        <input
          type="text"
          name="belakang"
          id="belakang"
          value={belakang}
          onChange={this.handleChange} />
          <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;
