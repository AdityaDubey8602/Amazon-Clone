import './App.css';
import Header from './Header.js'
import Home from './Home.js';
import Checkout from './Checkout.js'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase'
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe(
  'pk_test_51JKOzbSJCsV1CsghCKl9AmrOAO9xnxEWsYdRR3hj1WDlLYyvvK6ksRUrm4CZZiJJalDThO1toJlTt18iqssOmlYO00hfY3d2Lq'
  );

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when component loads....
    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS >>>', authUser);

      if(authUser) {
        // The User just logged in / The user was logged in 
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      }else {
        // The User is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    })
  }, [] )


  return (
    //BEM
    <Router>
    <div className="app">
    <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
