import React from 'react';
const ProfileImage = ({imageUrl, className, height}) => (
	<div className="mdl-card mdl-shadow--2dp profile-section">
		<div className="mdl-card__title mdl-card--expand">
			<img src={imageUrl} alt="profile image" height={height}></img>
		</div>
		<div className="mdl-card__supporting-text">
			<h2 className="mdl-card__title-text">Diwaker Singh</h2>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
		</div>
		<div className="mdl-card__actions mdl-card--border"></div>
	</div>
);
export default ProfileImage;
