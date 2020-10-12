import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Switch, Route} from 'react-router-dom';
import ScrollToTop from './util/ScrollToTop';
import {GlobalStyles} from './styles/global';
import {theme} from './styles/theme';
import AppBar from './components/App-bar';
import Homepage from './pages/homepage';
import Shop from './pages/shop';
import Footer from './pages/_partails/footer';

import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AppBar/>
      <ScrollToTop/>
      <Switch>
        <Route  path="/" exact component={Homepage}/>
        <Route  path="/shop/" exact component={Shop}/>
      </Switch>
      <Footer/>
    </ThemeProvider>
    
  );
}

export default App;
