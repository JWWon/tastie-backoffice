import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import BaseContainer from '@components/templates/BaseContainer';
import {ROUTE} from '@utils/const';
import Restaurants from '@pages/Restaurants';
import User from '@pages/User';

const Router: React.FC = () => (
  <BrowserRouter>
    <BaseContainer>
      <Switch>
        <Route path={ROUTE.RESTAURANTS}>
          <Restaurants />
        </Route>
        <Route path={ROUTE.USER}>
          <User />
        </Route>
      </Switch>
    </BaseContainer>
  </BrowserRouter>
);

export default Router;
