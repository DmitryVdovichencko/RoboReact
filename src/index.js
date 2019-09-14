import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { searchRobots, requestRobots } from './reducers'

// Store save all the states from the reducers now we have only searchRobots but later we need to combineReducers
// And so we can pass store as a prop to the component
const logger = createLogger();
const rootReducer = combineReducers({searchRobots, requestRobots})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))
ReactDOM.render(
	// Provider passing down store to all components down the tree
	// connect function simplify subscribing process for components, that need to know about redux - smart components.
	<Provider store = {store}>
		<App  />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
