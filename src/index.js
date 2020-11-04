import React from 'react';
import ReactDOM from 'react-dom';
/** Routers */
import {BrowserRouter as Router} from 'react-router-dom';
/** Redux */
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';
/**Components */
import App from './App';
/*Styles*/
import './index.css';

ReactDOM.render(
  <ReduxProvider store={store}>
    <Router>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </ReduxProvider>,
  document.getElementById('root')
);

