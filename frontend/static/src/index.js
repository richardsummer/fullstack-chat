import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BaseLayout from './components/BaseLayout.js';
import Login from './components/login/index.js';
import Signup from './components/signup/index.js';


ReactDOM.render(
  <Router>
      <BaseLayout>
          <Switch>
              <Route path="/signup/" component={Signup}/>
              <Route path='/login/' component={Login}/>
              <Route exact path="/" component={Login}/>
          </Switch>
      </BaseLayout>
  </Router>,
  document.getElementById('root')
);
