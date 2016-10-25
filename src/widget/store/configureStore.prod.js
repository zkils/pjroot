/**
 * Config Redux Store and set middleware for production
 */
import { createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware));
}