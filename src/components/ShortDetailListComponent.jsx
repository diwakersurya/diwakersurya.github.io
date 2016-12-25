import React from 'react';
import ShortDetailRow from "../components/ShortDetailRowComponent";
import css from "../styles/short-detail-list-style.css";
const ShortDetailList = ({profession,experienceSummary,address}) => (
	<div className={"mdl-card mdl-shadow--2dp " + css.parent} >
		<ShortDetailRow faIcon={"fa fa-briefcase"} shortDescription={profession}/>
		<ShortDetailRow faIcon={"fa fa-user"} shortDescription={experienceSummary}/>
		<ShortDetailRow faIcon={"fa fa-address-card"} shortDescription={address}/>
	</div>
);
export default ShortDetailList;
