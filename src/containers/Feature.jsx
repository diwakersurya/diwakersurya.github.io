import React from 'react';

//css files have been imported directly on page using script tags since css modules dont play
//well with external css libraries. hence both node_modules material design lite and downloaded
//mdl folder is there.
import {} from 'material-design-lite/material.min.js';
// imports for material design css end
//because github does not support url from node modules
import ProfileImage from '../components/ProfileImageComponent';
import EducationList from '../components/EducationListComponent';
import ExperienceList from '../components/ExperienceListComponent';
import ShortDetailList from '../components/ShortDetailListComponent';
import Technical from '../components/TechnicalComponent';
import resumeData from '../utils/data';
var widthMatchParent = {
    width: '100%'
};
var website = {
    backgroundColor: '#EEEEEE'
};
var leftSection = {
    backgroundColor: '#EEEEEE'
};
const Feature = () => (
    <div className="mdl-grid" style={website}>
        <div
            className="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--4-col-phone"
            style={leftSection}>
            <div>
                <ProfileImage
                    height="200px"
                    width="100%"
                    imageUrl="../../images/photo.jpg"
                    name={resumeData.name}
                />
                <ShortDetailList {...resumeData} />
                <Technical {...resumeData} />
            </div>
        </div>
        <div className="mdl-cell mdl-cell--8-col mdl-cell--5-col-tablet mdl-cell--4-col-phone">
            <EducationList education={resumeData.education} />
            <ExperienceList {...resumeData} />
        </div>
    </div>
);
export default Feature;
