/**
 * custom reducer module
 *
 * @module customReducer
 */

import { UPDATECHECKED, START_FETCH_PLAYERS, SUCCESS_FETCH_PLAYERS, ERROR_FETCH_PLAYERS } from '../actions/actionTypes/ActionTypes';
import initialState from './initialState';


/**
 * handle actions ( UPDATECHECKED )
 * @param state
 * @param action
 * @returns {*}
 */
export function updateCheckFlag(state = initialState.baseball, action ) {
    switch (action.type){
        case UPDATECHECKED:
            //update checked state
            return Object.assign({}, state, {
                checked:!state.checked
            });
        default:
            return state;
    }
}

/**
 * Fetch 성공 실패에 따른 처리를 실행
 * @param state
 * @param action
 * @returns {*}
 */
export function getPlayers(state = initialState.baseball, action){
    switch (action.type){
        case SUCCESS_FETCH_PLAYERS:
            return action.players;
        case ERROR_FETCH_PLAYERS:
            return [];
        default:
            return state;
    }
}
/**
 * Fetch 시작과 종료에 따른 동작을 실행 ex: loading 표시
 * @param state
 * @param action
 * @returns {*}
 */
export function inProgress(state,action){
    state = state || false;
    switch (action.type){
        case START_FETCH_PLAYERS:
            return true;
        case SUCCESS_FETCH_PLAYERS:
            return false;
        case ERROR_FETCH_PLAYERS:
            return false;
        default:
            return state;
    }
}