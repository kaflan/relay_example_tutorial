import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CreatePage from './CreatePage'
import { Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import history from './history';

ReactDOM.render(
    <Router history={history}>
      <div>
        <Route path='/' exact component={App} />
        <Route path='/create' exact component={CreatePage} />
      </div>
    </Router>
  , document.getElementById('root'));
registerServiceWorker();
