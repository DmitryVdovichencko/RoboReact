/*
Action is function that returns an object with type and payload for it. 
Then this object goes to ---> reducer. 
To avoid misspell in type we use constants.js
*/

import { CHANGE_SEARCH_FIELD } from './constants'
export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload:text
})