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
const ShortDetail = ({shortDescription}) => (
	<div className="mdl-card mdl-shadow--2dp" style={{
		width: "100%"
	}}>
		<div className="mdl-card__supporting-text" style={styleShortDetailsParent}>
			<div style={styleLeft}>
				<i className="fa fa-user" aria-hidden="true" style={styleIcon}></i>
			</div>
			<div style={styleRight}>{shortDescription}</div>
		</div>
		<div className="mdl-card__actions mdl-card--border"></div>
	</div>
);
export default ShortDetail;
