import React from 'react';
import {ThemeProvider} from 'styled-components';

import theme from '@styles/theme';
import Text from '@components/atoms/Text';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Text />
    </ThemeProvider>
  );
}

export default App;
