import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from './components/Form.js';
import './index.css';
import { Router, Route, browserHistory} from 'react-router'

ReactDOM.render((
   <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/form" component={Form} />
   </Router>

),  document.getElementById('root'));

