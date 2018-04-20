import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const history=createHistory();
const sagaMiddleware=createSagaMiddleware();
//const store=createStore(composeWithDevTools(rootReducer,applyMiddleware(sagaMiddleware,routerMiddleware(history))));
const store=createStore(rootReducer,applyMiddleware(sagaMiddleware,routerMiddleware(history)));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
    <ConnectedRouter history={history}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </ConnectedRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
