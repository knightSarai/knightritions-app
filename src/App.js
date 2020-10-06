import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Switch, Route} from 'react-router-dom';
import {GlobalStyles} from './styles/global';
import {theme} from './styles/theme';

import Homepage from './pages/homepage';
import './App.css';
const sup = () => {
  return (
    <h1>sup</h1>
  )
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Switch>
        <Route  path="/" exact component={Homepage}/>
        <Route  path="/supplements" exact component={sup}/>
      </Switch>
    </ThemeProvider>
    
  );
}

export default App;
