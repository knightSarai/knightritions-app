import React from 'react';
import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from './styles/global';
import {theme} from './styles/theme';

import Homepage from './pages/homepage';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Homepage/>
    </ThemeProvider>
    
  );
}

export default App;
