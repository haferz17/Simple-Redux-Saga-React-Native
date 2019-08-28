import React from 'react';
import { AppRegistry } from 'react-native';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from './src/reducers';
import Home from './src/components/Home';
import rootSaga from './src/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

const App = () => (
    <Provider store={store}>
        <Home />
    </Provider>
);
AppRegistry.registerComponent('reactSaga', () => App);