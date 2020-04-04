import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';

import {configStore} from '@store/index';
import Router from '@router/index';
import theme from '@styles/theme';

const store = configStore();

const App: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </Provider>
);

export default App;
