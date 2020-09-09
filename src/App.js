import React from 'react';
import Header from './components/Header';
import Home from './views/Home';
import Checkout from './views/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />         
        <Switch>
          <Route exact path="/">
            <Home />

          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>

          <Route path="/">
            <h1>Eror 404: Not Found</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
