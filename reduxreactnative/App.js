import React, { Component } from 'react';
import { Provider } from 'react-redux';
import RootReducer from './rootreducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Myapp from './index';

export const store = createStore(
  RootReducer,
  undefined,
  // the ordering of middleware is significant.
  applyMiddleware(thunk)
);



export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Myapp/>
      </Provider>
    );
  }
}
