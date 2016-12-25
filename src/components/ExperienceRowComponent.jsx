import React from 'react';
import css from "../styles/experience-row-style.css";
const ExperienceRow = ({designation,company,duration,city,state,country,description}) => (
	<div className={"mdl-card__supporting-text "+css.parent}>
		<p className={css.designation}>{designation}</p>
		<p className={css.company}>{company}</p>
			<p className={css.duration}>{duration}|<span>{city},{country}</span></p>
		<p className={css.description}>{description}</p>
		<div className={css.border}></div>
	</div>
);
export default ExperienceRow;
