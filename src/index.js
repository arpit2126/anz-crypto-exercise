import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { appStore } from './store';
import { CryptoCcyListContainer } from './containers/CryptoCCYList/CryptoCcyList';

function initialise() {
    const app = document.createElement('div');
    document.body.appendChild(app);
    ReactDOM.render(
        <Provider store={appStore}>
            <CryptoCcyListContainer />
        </Provider>,
       app
    );
}

initialise();
