import React, { Component } from 'react';
import './Form.css'
import App from '../App.js'

class Form extends Component {


  render(){
    return(
    <div className="form">
      <form className="form-group row">
        <label for="example-text-input" className="col-2 col-form-label">Domain name</label>
          <div className="col-10">
         <input className="form-control" type="text" value={this.props.domain[0]} id="example-text-input"></input>
        </div>
      </form>
      <div className="form-group row">
        <label for="example-text-input" className="col-2 col-form-label">Registran Email</label>
          <div className="col-10">
         <input className="form-control" type="text" value="email placeholder" id="example-text-input"></input>
        </div>
      </div>
      <div className="form-group row">
        <label for="example-text-input" className="col-2 col-form-label">Price</label>
          <div className="col-10">
         <input className="form-control" type="text" value="$$$" id="example-text-input"></input>
        </div>
        <button type="button" id="button" className="btn btn-default">Submit</button>
      </div>
    </div>
    )
  }

}

export default Form;
