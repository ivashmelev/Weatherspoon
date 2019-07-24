import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
import Weatherspoon from './components/Weatherspoon';
import * as serviceWorker from './serviceWorker';
// import * as reducers from './store/reducers';

// const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

ReactDOM.render(
  // <Provider store={store}>
    <Weatherspoon />,
  // </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
