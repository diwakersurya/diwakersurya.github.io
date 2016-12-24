import React from 'react';
import css from "../styles/experience-row-style.css";
const ExperienceRow = ({designation,company,duration,city,state,country,description}) => (
	<div className={"mdl-card__supporting-text "+css.parent}>
		<p className={css.designation}>{designation}</p>
		{/* <p className={css.degree}><span>{degree},</span><span></span>{field},<span>{grade}</span></p>
			<p className={css.duration}><span>{fromYear}</span>-<span>{toYear}</span></p>
		{extraActivity && <p className={css.extraActivity}>{extraActivity}</p>} */}
		<div className={css.border}></div>
	</div>
);
export default ExperienceRow;
