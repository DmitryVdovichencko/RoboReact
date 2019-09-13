import { CHANGE_SEARCH_FIELD } from './constants'
const initialState = {
	searchField: ''
}
/*
Reducer is a function, that receive action and work on state.

*/
export const searchRobots = (state = initialState, action = {}) => {
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
// Here we create a new state object, based on initialState with new searchField value  
			return Object.assign({}, state, {searchField: action.payload});
			//using spread
			//return {...state, searchField:action.payload}
		default:
			return state;
	}

}