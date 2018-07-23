import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { createHistory as history } from 'history';
import createSagaMiddleware from 'redux-saga';

import ServerListContainer from './containers/ServerListContainer';
import DiskListContainer from './containers/DiskListContainer';
import App from './components/App';

import reducers from './reducers/reducers';
import rootSaga from './sagas/sagas.';
import '../assets/stylesheets/application.scss';

// const reducers = combineReducers({
//   // key: reducer
// });

const sagaMiddleware = typeof createSagaMiddleware === 'function' ? createSagaMiddleware() : createSagaMiddleware.default();
const middlewares = applyMiddleware(reduxPromise, logger, sagaMiddleware);

const store = createStore(reducers, middlewares);

sagaMiddleware.run(rootSaga);
// render an instance of the component in the DOM
ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App>
				<Switch>
					<Route path="/server" component={ServerListContainer}/>
					<Route path="/disk/:serverId" component={DiskListContainer}/>
					<Redirect to='/server' />
				</Switch>
			</App>
		</Router>
	</Provider>,
	document.getElementById('root')
);
