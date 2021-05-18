import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import MarkDown from './markdown'
import Clock from './clock'
//import TextPort from './teleport'
import Calculator from './calcu'
import HomePage from './home'
import Random from './random'
import DrumDrum from './drum'
import Page404 from './App'

ReactDOM.render(
 <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route exact path="/pages/docktest" component={HomePage} />
      <Route exact path="/pages/docktest/calc" component={Calculator} />
      <Route exact path="/pages/docktest/clock" component={Clock} />
      <Route path="/nosuch" component={Page404} />
      {/* add routes without layouts */}
      <Route path="/pages/docktest/random" exact component={Random} />
      <Route path="/pages/docktest/drum" exact component={DrumDrum} />
      <Route path="/pages/docktest/markdown" exact component={MarkDown} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/nosuch" />
    </Switch>
  </BrowserRouter>,

    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
