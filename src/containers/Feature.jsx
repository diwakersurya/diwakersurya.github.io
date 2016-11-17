import React from 'react';
import Router from 'react-router/BrowserRouter'
import {MatchWithSubRoutes} from '../utils';
import ProfileImage from "../components/ProfileImageComponent"
import Data from "../components/DataComponent";
import ShortDetail from "../components/ShortDetailComponent";
import resumeData from "../utils/data"
var widthMatchParent = {
	width: "100%"
}
var website = {
	backgroundColor: "#EEEEEE"
}
var leftSection = {
	backgroundColor: "#3AA5DD"
}
const Feature = () => (
	<Router history={history} location={window.location}>
		<div className="mdl-grid" style={website}>
			<div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--4-col-phone" style={leftSection}>
				<div >
					<ProfileImage height="200px" width="100%" imageUrl="../../images/photo.jpg" name={resumeData.name}/>
					<ShortDetail shortDescription={resumeData.shortDescription}/>
				</div>
			</div>
			<div className="mdl-cell mdl-cell--8-col mdl-cell--5-col-tablet mdl-cell--4-col-phone">
				<div className="mdl-card mdl-shadow--2dp" style={widthMatchParent}>
					{/* <Data height="200px" width="100%"/> */}
				</div>
			</div>
		</div>
	</Router>
)
export default Feature
