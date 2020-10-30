import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Switch, Route, Redirect} from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.util';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';
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
  

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth).catch(err => console.log(err));
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      }else {
        setCurrentUser(userAuth)
      }
      
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render () {
    const {currentUser} = this.props;

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <AppBar/>
        <ScrollToTop/>
        <Switch>
          <Route  path="/" exact component={Homepage}/>
          <Route  path="/shop" exact component={Shop}/>
          <Route  path="/sign" exact render={() => currentUser? <Redirect to="/"/> : <Sign/>}/>
        </Switch>
        <Footer/>
      </ThemeProvider>
    );
  }
 
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

export default connect(mapStateToProps, {setCurrentUser})(App);
