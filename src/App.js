import React, { Component } from 'react';
import './App.css';
// import Form from './Form.js'

class App extends Component {
constructor(props){
  super(props);
  this.state = {
    domain: ['foodfighters.lol', 'selfdriving.cars', 'greendiamondsky.com'],
    price: ['12.00', '16.00', '9.00'],


   }
    // this.isChecked = this.isChecked.bind(this)
  }

  // isChecked (index) {

  //     const check = this.state.domain[0].charAt(str.length-3);
  //       check === 'lol' ? true : false
  //   }



    render() {
      let _ = require('underscore')
      const domains = this.state.domain;
      const each = _.each(domains, function(d){})
      console.log(each[0]);

      const price = this.state.price;
      const eachPrice = _.each(price, function(p){})
      console.log(price[0])

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
                          { each[0].includes("lol") || each[0].includes("cars")
                            ?
                          <input type="checkbox" id="checkbox1" checked></input>
                            :
                          <input type="checkbox" id="checkbox1"></input>

                           }

                          <label for="checkbox1"></label>
                      </fieldset>
                  </td>
                    <td><a>{each[0]}</a></td>
                    <td>${price[0]}</td>
              </tr>
          <tr>
              <th scope="row">2</th>
              <td>
                  <fieldset className="form-group">
                    { each[1].includes("lol") || each[1].includes("cars")
                      ?
                      <input type="checkbox" id="checkbox2" checked></input>
                      :
                      <input type="checkbox" id="checkbox2"></input>

                    }
                      <label for="checkbox2"></label>
                  </fieldset>
              </td>
              <td><a>{each[1]}</a></td>
              <td>${price[1]}</td>
          </tr>
          <tr>
              <th scope="row">3</th>
              <td>
                  <fieldset className="form-group">
                  { each[2].includes("lol") || each[2].includes("cars")
                      ?
                      <input type="checkbox" id="checkbox3" checked></input>
                      :
                      <input type="checkbox" id="checkbox3" ></input>
                  }
                      <label for="checkbox3"></label>
                  </fieldset>
              </td>
              <td><a>{each[2]}</a></td>
              <td>${price[2]}</td>
          </tr>
      </tbody>
    </table>
  </div>
    );
  }
}

export default App;
