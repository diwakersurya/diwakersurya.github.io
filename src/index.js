import React from 'react';
import ReactDOM from 'react-dom';
import route from "./utils/routeConfig";
import Feature from './containers/Feature';
ReactDOM.render(
	<Feature route={route}/>, document.querySelector('.container'))
