import React from 'react';
import fa from "font-awesome/css/font-awesome.css";
var styleShortDetailsParent = {
	flex: 100,
	display: "flex",
	flexDirection: "row"
}
var styleIcon = {
	fontSize: "2em"
}
var styleLeft = {
	flex: 15
}
var styleRight = {
	flex: 85
}
const ShortDetail = ({imageUrl, className, height, name}) => (
	<div className="mdl-card mdl-shadow--2dp" style={{
		width: "100%"
	}}>
		<div className="mdl-card__supporting-text" style={styleShortDetailsParent}>
			<div style={styleLeft}>
				<i className="fa fa-user" aria-hidden="true" style={styleIcon}></i>
			</div>
			<div style={styleRight}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
		</div>
		<div className="mdl-card__actions mdl-card--border"></div>
	</div>
);
export default ShortDetail;
