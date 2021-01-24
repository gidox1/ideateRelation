import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Add from './component/addRelation';
import Create from './component/create_relation';
import View from './component/view';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
     <Router>
      <Switch>
          <Route exact path="/" exact>
            <App />
          </Route>
          <Route exact path="/add">
            <Add />
          </Route>
          <Route exact path="/add/view">
            <View />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route component={App}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
