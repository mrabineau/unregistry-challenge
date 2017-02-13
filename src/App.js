import React, { Component } from 'react';
import './App.css';
// import Form from './Form.js'

class App extends Component {
constructor(props){
  super(props);
  this.state = {
    domain: ['foodfighters.lol', 'selfdriving.cars', 'greendiamondsky.com'],
    price: ['12.00', '16.00', '9.00']

   }
  }


    render() {
      let _ = require('underscore')
      const domains = this.state.domain;
          _.each(domains, function(k, index, domains){
            console.log(k)
              return <a className="d" key={k}></a>
          })
      return (
       <div id="center">
          <table className="table">
               <thead>
                  <tr>
                    <th>#</th>
                    <th>Unregistry</th>
                    <th>Domain Name</th>
                    <th>Price</th>
                  </tr>
              </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                    <td>
                      <fieldset className="form-group">
                          <input type="checkbox" id="checkbox1"></input>
                          <label for="checkbox1"></label>
                      </fieldset>
                  </td>
                    <td></td>
                    <td>$12.00</td>
              </tr>
          <tr>
              <th scope="row">2</th>
              <td>
                  <fieldset className="form-group">
                      <input type="checkbox" id="checkbox2"></input>
                      <label for="checkbox2"></label>
                  </fieldset>
              </td>
              <td><a>selfdriving.cars</a></td>
              <td>$16.00</td>
          </tr>
          <tr>
              <th scope="row">3</th>
              <td>
                  <fieldset className="form-group">
                      <input type="checkbox" id="checkbox3"></input>
                      <label for="checkbox3"></label>
                  </fieldset>
              </td>
              <td><a>greendiamondsky.com</a></td>
              <td>$16.00</td>
          </tr>
      </tbody>
    </table>
  </div>
    );
  }
}

export default App;
