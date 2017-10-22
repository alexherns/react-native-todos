// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';

import List from './components/List';
import Title from './components/Title';
import { defaultState, reducer } from './reducer';

// Import the reducer and create a store
const store = createStore(reducer, defaultState, autoRehydrate());
persistStore(store, { storage: AsyncStorage });

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

const App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <Title title="To dos" />
      <List />
    </View>
  </Provider>
)

export default App
