import React from 'react';
import Router from 'react-router/BrowserRouter'
//require css so that it can be transferred on the page
// imports for material design css
 import {} from "material-design-lite/material.min.css"
 import {} from "material-design-lite/material.min.js"
 import {} from "font-awesome/css/font-awesome.min.css";
 // imports for material design css end
//because github does not support url from node modules
import {MatchWithSubRoutes} from '../utils';
import ProfileImage from "../components/ProfileImageComponent"
import EducationList from "../components/EducationListComponent";
import ExperienceList from "../components/ExperienceListComponent";
import ShortDetailList from "../components/ShortDetailListComponent";
import Technical from "../components/TechnicalComponent";
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
					<ShortDetailList {...resumeData}/>
					<Technical {...resumeData}/>
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
