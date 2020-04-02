import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import BaseView from '@components/templates/BaseView';
import {ROUTE} from '@utils/const';
import Restaurant from '@pages/Restaurant';
import User from '@pages/User';

const Router: React.FC = () => (
  <BrowserRouter>
    <BaseView>
      <Switch>
        <Route path={ROUTE.RESTAURANT}>
          <Restaurant />
        </Route>
        <Route path={ROUTE.USER}>
          <User />
        </Route>
      </Switch>
    </BaseView>
  </BrowserRouter>
);

export default Router;
