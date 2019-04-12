import { createStore } from 'redux';
import reducer from './reducers/index.js';


export default function configureStore(middleware, initialState = {}) {
    return createStore(
        reducer,
        initialState,
        middleware
    );
}