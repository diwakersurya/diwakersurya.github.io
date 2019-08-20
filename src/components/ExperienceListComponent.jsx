import React from "react"
import ExperienceRow from "./ExperienceRowComponent"
import css from "../styles/experience-list-style.module.css"
const ExperienceList = ({ experience }) => (
  <div className={"mdl-card mdl-shadow--2dp " + css["experienceListParent"]}>
    <div className="mdl-card__supporting-text">
      <h4>
        <i className="fab fa-black-tie" aria-hidden="true"></i> Experience
      </h4>
      <div className={css.border}></div>
    </div>
    {experience.map(experienceItem => (
      <ExperienceRow key={experienceItem.company} {...experienceItem} />
    ))}
  </div>
)
export default ExperienceList
