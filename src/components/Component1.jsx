import React from 'react';
import BaseComponent from "./BaseComponent"
export default class Component1 extends BaseComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		console.log(this.props);
		return (
			<div>
				This is placeholder for component one.
			</div>
		)
	}
}
