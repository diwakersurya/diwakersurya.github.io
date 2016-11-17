import React from 'react';
import ReactDOM from 'react-dom';
// imports for material design css
import {} from "material-design-lite/material.min.css"
import {} from "material-design-lite/material.min.js"
import {} from "font-awesome/css/font-awesome.min.css";
// imports for material design css end
import route from "./utils/routeConfig";
import Feature from './containers/Feature';
ReactDOM.render(
	<Feature route={route}/>, document.querySelector('.container'))
