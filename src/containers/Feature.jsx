import React from 'react';
import Router from 'react-router/BrowserRouter'
import {MatchWithSubRoutes} from '../utils';
const Feature = () => (
	<Router history={history} location={window.location}>
		<div className="container">
			<div className="row">
				<div className="item">
					<a className="mdl-navigation__link" to="options">Options</a>
				</div>
				<div className="item">dasdad</div>
				<div className="item center-content">adasdasda</div>
			</div>
			<div className="item">sadasda</div>
			<div className="item">sadasdas</div>
		</div>
	</Router>
)
export default Feature
