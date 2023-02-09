import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Aplication from './pages/Aplication';

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={ Login } />
        <Route exact path='/quadro-de-pixels' component={ Aplication } />
      </Switch>
    </div>
  );
}

export default App;
