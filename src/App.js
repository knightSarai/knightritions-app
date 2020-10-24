import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Switch, Route} from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.util';
import ScrollToTop from './util/ScrollToTop';
import {GlobalStyles} from './styles/global';
import {theme} from './styles/theme';
import AppBar from './components/App-bar';
import Homepage from './pages/homepage';
import Shop from './pages/shop';
import Sign from './pages/sign';
import Footer from './pages/_partails/footer';

import './App.css';

class App extends React.Component{
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth).catch(err => console.log(err));
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }else {
        this.setState({currentUser: userAuth})
      }
      
      // console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render () {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <AppBar currentUser={this.state.currentUser}/>
        <ScrollToTop/>
        <Switch>
          <Route  path="/" exact component={Homepage}/>
          <Route  path="/shop" exact component={Shop}/>
          <Route  path="/sign" exact component={Sign}/>
        </Switch>
        <Footer/>
      </ThemeProvider>
    );
  }
 
}

export default App;
