import React from "react"
import LanguagesPie from "../components/LanguagesPieComponent"
import DatabasesPie from "../components/DatabasesPieComponent"
import FrameworksPie from "../components/FrameworksPieComponent"
import css from "../styles/technical-style.module.css"
const Technical = ({ technical }) => (
  <div className={"mdl-card mdl-shadow--2dp " + css["parent"]}>
    <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
      <div className="mdl-tabs__tab-bar">
        <a href="#languages-panel" className="mdl-tabs__tab is-active">
          Languages
        </a>
        <a href="#databases-panel" className="mdl-tabs__tab">
          Databases
        </a>
        <a href="#frameworks-panel" className="mdl-tabs__tab">
          frameworks
        </a>
      </div>
      <div className="mdl-tabs__panel is-active" id="languages-panel">
        <LanguagesPie {...technical} />
      </div>
      <div className="mdl-tabs__panel" id="databases-panel">
        <DatabasesPie {...technical} />
      </div>
      <div className="mdl-tabs__panel" id="frameworks-panel">
        {/* <FrameworksPie {...technical}/> */}
      </div>
    </div>
  </div>
)
export default Technical
