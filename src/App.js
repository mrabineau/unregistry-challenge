import React, { Component } from 'react';
import './App.css';
import Form from './components/Form.js'
import { Link } from 'react-router';


class App extends Component {
constructor(props){
  super(props);
  this.state = {
    domain: ['foodfighters.lol', 'selfdriving.cars', 'greendiamondsky.com'],
    selected: null,
    price: ['12.00', '16.00', '9.00'],
   }

   this.selectUrl = this.selectUrl.bind(this)

}

  selectUrl(index) {
    if (index !== null) {
      this.setState({selected: true})
    }
  }




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
                        <td><Link to="/form" onClick={() => this.selectUrl()}>{each[0]}</Link></td>
                        {  }
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
        <Form domain={each}/>
    </div>
    );
  }
}

export default App;
