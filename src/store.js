import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './reducers/index';
import thunk from 'redux-thunk';

export function configureStore(initialState = {}) {
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    return store;
}

export const appStore = configureStore();