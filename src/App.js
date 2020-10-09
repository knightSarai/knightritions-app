import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Switch, Route} from 'react-router-dom';
import {GlobalStyles} from './styles/global';
import {theme} from './styles/theme';
import AppBar from './components/App-bar';
import Homepage from './pages/homepage';
import Shop from './pages/shop'
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AppBar/>
      <Switch>
        <Route  path="/" exact component={Homepage}/>
        <Route  path="/shop" exact component={Shop}/>
      </Switch>
    </ThemeProvider>
    
  );
}

export default App;
