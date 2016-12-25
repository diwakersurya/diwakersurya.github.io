import React from 'react';
var PieChart = require('react-d3-basic').PieChart;
let width=400,
height=300;
const name = (d)=> (d.name);
const	value = (d)=>(d.value);
const chartSeries = [
		 ];
const DatabasesPie = ({databases}) => {
	//creating the seried for the chart based on the data.
databases.forEach((database)=>(
	chartSeries.push({
		field:database.name,
		name:database.name
	})
));
	return (
			<div className="mdl-card__supporting-text">
				<PieChart
					data= {databases}
					width= {width}
					height= {height}
					chartSeries= {chartSeries}
					value = {value}
					name = {name}
				/>
	</div>
);
};
export default DatabasesPie;
