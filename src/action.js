/*
Action is function that returns an object with type and payload for it. 
Then this object goes to ---> reducer. 
To avoid misspell in type we use constants.js
*/
import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED

} from './constants'
export const setSearchField = (text) => (
	{
		type: CHANGE_SEARCH_FIELD,
		payload:text
	}
)
export const requestRobots = () => (dispatch) => {
	dispatch({ type: REQUEST_ROBOTS_PENDING });
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data}))
		.catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error}))
}