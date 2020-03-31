import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import BaseView from '@components/templates/BaseView';
import Discovery from '@pages/Discovery';
import User from '@pages/User';

const Router: React.FC = () => (
  <BrowserRouter>
    <BaseView>
      <Switch>
        <Route path="/discovery">
          <Discovery />
        </Route>
        <Route path="/user">
          <User />
        </Route>
      </Switch>
    </BaseView>
  </BrowserRouter>
);

export default Router;
