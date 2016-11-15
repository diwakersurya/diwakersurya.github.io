import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import ReduxPromise from "redux-promise";
import route from "./utils/routeConfig";
import Feature from './containers/Feature';
const logger = store => next => action => {
	console.group(action.type)
	console.info('dispatching', action)
	let result = next(action)
	console.log('next state', store.getState())
	console.groupEnd(action.type)
	return result
}
const store = applyMiddleware(logger)(createStore)(reducers)
console.log("store", store.getState());
ReactDOM.render(
	<Provider store={store}><Feature route={route}/></Provider>, document.querySelector('.container'))
