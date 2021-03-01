import React from 'react';
import { BrowserRouter as BRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './LandinPage'
import Cart from './container/ProductCart'
import OrderSummary from './container/OrderSummary'

export default function Router() {
    return (
      <BRouter>
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/Cart' exact component={Cart} />
          <Route path='/OrderSummary' exact component={OrderSummary} />
        </Switch>
      </BRouter>
    );
  }
  