import './ReactotronConfig';
import Reactotron from 'reactotron-react-native';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from './app/reducers'
import Main from './app/containers/App';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

// store.subscribe(() =>
//   Reactotron.log(store.getState())
// )
//
// store.dispatch({ type: 'INCREMENT' })
// // 1
// store.dispatch({ type: 'INCREMENT' })
// // 2
// store.dispatch({ type: 'DECREMENT' })
// // 1

class App extends Component {
  render() {
      Reactotron.log(store.getState());
    return (
      <Provider store={store}>
        <Main store={store} />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('dopomodoro', () => App);
