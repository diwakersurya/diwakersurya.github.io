import React from "react"
import css from "../styles/education-row-style.module.css"
const EducationRow = ({
  instituteName,
  degree,
  field,
  grade,
  fromYear,
  toYear,
  extraActivity,
}) => (
  <div className={"mdl-card__supporting-text " + css.parent}>
    <p className={css.instituteName}>{instituteName}</p>
    <p className={css.degree}>
      <span>{degree},</span>
      <span></span>
      {field},<span>{grade}</span>
    </p>
    <p className={css.duration}>
      <span>{fromYear}</span>-<span>{toYear}</span>
    </p>
    {extraActivity && <p className={css.extraActivity}>{extraActivity}</p>}
    <div className={css.border}></div>
  </div>
)
export default EducationRow
