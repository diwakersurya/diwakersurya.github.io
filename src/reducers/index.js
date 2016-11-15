import {combineReducers} from 'redux';
import {default} from './default.js';
const initialLocation = {
	pathname: '/app',
	search: '',
	hash: ''
}
const locationReducer = (state = initialLocation, action) => {
	return action.type === 'LOCATION_CHANGE'
		? action.location
		: state
}
const rootReducer = combineReducers({default, location: locationReducer});
export default rootReducer;
