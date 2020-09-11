import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './views/Home';
import Login from './views/Login';
import Checkout from './views/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {

      if (authUser) {
        // the user just logged or was logged already
        
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        // the user us logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />         
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Header />                     
            <Checkout />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Header />         
            <h1>Eror 404: Not Found</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
