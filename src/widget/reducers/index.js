/*
 * Combine all reducer with routerReducer
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { getPlayers,inProgress, updateCheckFlag } from './customReducer';
import { intlReducer } from 'react-intl-redux';

const rootReducer = combineReducers({
    updateCheckFlag,
    getPlayers,
    inProgress,
    // add your reducer
    intl: intlReducer,
    routing: routerReducer,
});

export default rootReducer;


