import React from 'react';
var style = {
	backgroundColor: "#F5D0B5"
}
var styleProfileParent = {
	width: "100%"
}
var styleProfileImage = {
	border: "5px solid white",
	left: "0px"
}
const ProfileImage = ({imageUrl, className, height, name}) => (
	<div className="mdl-card mdl-shadow--2dp" style={styleProfileParent}>
		<div className="mdl-card__title mdl-card--expand" style={style}>
			<img src={imageUrl} alt="profile image" height={height} style={styleProfileImage}></img>
		</div>
		<div className="mdl-card__supporting-text">
			<h2 className="mdl-card__title-text">{name}</h2>
		</div>
		<div className="mdl-card__actions mdl-card--border"></div>
	</div>
);
export default ProfileImage;;
