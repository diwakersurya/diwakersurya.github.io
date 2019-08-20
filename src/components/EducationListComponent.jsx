import React from "react"
import EducationRow from "./EducationRowComponent"
import css from "../styles/education-list-style.module.css"
const EducationList = ({ education }) => (
  <div className={"mdl-card mdl-shadow--2dp " + css["educationListParent"]}>
    <div className="mdl-card__supporting-text">
      <h4>
        <i className="fa fa-graduation-cap" aria-hidden="true"></i> Education
      </h4>
      <div className={css.border}></div>
    </div>
    {education.map(educationItem => (
      <EducationRow key={educationItem.degree} {...educationItem} />
    ))}
  </div>
)
export default EducationList
