import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RootReducer from './reducers/RootReducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


import registerServiceWorker from './registerServiceWorker';

const store = createStore(RootReducer);

const AppRoot = (
    <Provider store={store}>
        <div>
            <App/>
        </div>
    </Provider>
);

ReactDOM.render(AppRoot, document.getElementById('root'));
registerServiceWorker();