import React from 'react';
import css from "../styles/short-detail-row-style.css";
const ShortDetailRow = ({faIcon,shortDescription}) => (
	<div>
		<div className={"mdl-card__supporting-text "+ css["details-inner-parent"]}>
			<div className={css.left}>
				<i className={faIcon+" "+css.icon} aria-hidden="true" ></i>
			</div>
			<div className={css.right}>{shortDescription}</div>
		</div>
		<div className="mdl-card__actions mdl-card--border"></div>
	</div>

);
export default ShortDetailRow;
