import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Switch, Route} from 'react-router-dom';
import {GlobalStyles} from './styles/global';
import {theme} from './styles/theme';

import Homepage from './pages/homepage';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
      </Switch>
      <Homepage/>
    </ThemeProvider>
    
  );
}

export default App;
