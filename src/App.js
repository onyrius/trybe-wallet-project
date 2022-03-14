import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/carteira" component={ Wallet } />
    </Switch>
  );
}

export default App;
/** Source: projeto desenvolvido com a ajuda da Carol Só:
 * https://github.com/tryber/sd-018-b-project-trybewallet/pull/24
 */
