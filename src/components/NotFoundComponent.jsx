import React from 'react';
import BaseComponent from "./BaseComponent"
export default class NotFoundComponent extends BaseComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				404 Not found.
			</div>
		)
	}
}
