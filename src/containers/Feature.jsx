import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import update from "react-addons-update";
import BaseComponent from "../components/BaseComponent"
import {MyModal} from '../../custom_modules';
import Component1 from '../components/Component1';
import Component10 from '../components/Component10';
import Match from 'react-router/Match'
import Miss from 'react-router/Miss'
import Link from 'react-router/Link'
import Router from 'react-router/BrowserRouter'
import {MatchWithSubRoutes} from '../utils';
class Feature extends BaseComponent {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: true
		};
	}
	openModal() {
		this.setState({isModalOpen: true});
	}
	closeModal() {
		this.setState({isModalOpen: false});
	}
	render() {
		let {route} = this.props;
		return (
			<MyModal isOpen={this.state.isModalOpen} closeCallback={this.closeModal.bind(this)} transitionName="modal-anim">
				<div style={{
					height: "400px",
					width: "400px"
				}}>
					<Router history={history} location={window.location}>
						<div className="feature-content">
							{/* <Link to="/app/component1">Component1</Link>
							<Link to="/app/component10">Component10</Link> */}
							{route.subRoutes.map(subRoute => (<MatchWithSubRoutes key={subRoute.pattern} {...subRoute}/>))}
						</div>
					</Router>
				</div>
			</MyModal>
		);
	}
}
const mapStateToProps = (state) => ({location: state.location})
function mapDispatchToProps(dispatch) {
	return bindActionCreators({}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Feature);
