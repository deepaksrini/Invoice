import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import { rootreducer } from './reducer/rootreducer';
import thunk from 'redux-thunk'
import { getFirebase } from 'react-redux-firebase'
import { getFirestore } from 'redux-firestore'
const store = configureStore(
  {
    reducer: rootreducer
  }, applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
)

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./reducer/rootreducer.js', () => {
    const newRootReducer = require('./reducer/rootreducer').default;
    store.replaceReducer(newRootReducer)
  })
}

const render = () => {
  const App = require('./component/App').default

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}
render()

if (process.env.NODE_ENV !== 'development' && module.hot) {
  module.hot.accept('./component/App', render)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
