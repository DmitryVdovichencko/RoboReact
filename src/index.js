import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { searchRobots } from './reducers'

// Store save all the states from the reducers now we have only searchRobots but later we need to combineReducers
// And so we can pass store as a prop to the component
const store = createStore(searchRobots)
ReactDOM.render(
	// Provider passing down store to all components down the tree
	// connect function simplify subscribing process for components, that need to know about redux - smart components.
	<Provider store = {store}>
		<App  />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
