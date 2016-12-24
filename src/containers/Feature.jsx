import React from 'react';
import Router from 'react-router/BrowserRouter'
import {MatchWithSubRoutes} from '../utils';
import ProfileImage from "../components/ProfileImageComponent"
import EducationList from "../components/EducationListComponent";
import ExperienceList from "../components/ExperienceListComponent";
import ShortDetailRow from "../components/ShortDetailRowComponent";
import resumeData from "../utils/data"
var widthMatchParent = {
	width: "100%"
}
var website = {
	backgroundColor: "#EEEEEE"
}
var leftSection = {
	backgroundColor: "#EEEEEE"
}
const Feature = () => (
	<Router history={history} location={window.location}>
		<div className="mdl-grid" style={website}>
			<div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--4-col-phone" style={leftSection}>
				<div >
					<ProfileImage height="200px" width="100%" imageUrl="../../images/photo.jpg" name={resumeData.name}/>
					<ShortDetailRow faIcon={"fa fa-briefcase"} shortDescription={resumeData.profession}/>
					<ShortDetailRow faIcon={"fa fa-user"} shortDescription={resumeData.experienceSummary}/>
					<ShortDetailRow faIcon={"fa fa-address-card"} shortDescription={resumeData.address}/>
				</div>
			</div>
			<div className="mdl-cell mdl-cell--8-col mdl-cell--5-col-tablet mdl-cell--4-col-phone">
				<EducationList education={resumeData.education}/>
				<ExperienceList {...resumeData}/>

			</div>
		</div>
	</Router>
)
export default Feature
