// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';

import Main from './components/Main';
import { defaultState, reducer } from './reducer';

// Import the reducer and create a store
const store = createStore(reducer, defaultState, autoRehydrate());
persistStore(store, { storage: AsyncStorage });

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
