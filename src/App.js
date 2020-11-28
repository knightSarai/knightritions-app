import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
/* FIREBASE */
import {auth, createUserProfileDocument} from './firebase/firebase.util';
/* REDUX */
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {setCurrentUser} from './redux/user/user.action';
import {selectCurrentUser} from './redux/user/user.selector';
/* UTIL*/
import ScrollToTop from './util/ScrollToTop';
/*COMPONENTS */
import AppBar from './components/App-bar';
import Footer from './pages/_partails/footer';
/* PAGES */
import Homepage from './pages/homepage';
import Shop from './pages/shop';
import Sign from './pages/sign';
import CheckoutCart from './pages/checkoutCart';
/* STYLES */
import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from './styles/global';
import {theme} from './styles/theme';
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
          <Route  path="/shop"  component={Shop}/>
          <Route path="/checkout" exact component={CheckoutCart}/>
          <Route  path="/sign" exact render={() => currentUser? <Redirect to="/"/> : <Sign/>}/>
          <Route render={() => <h1>Not found!</h1>} />
        </Switch>
        <Footer/>
      </ThemeProvider>
    );
  }
 
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, {setCurrentUser})(App);
