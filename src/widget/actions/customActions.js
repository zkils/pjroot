/** @module custom action creators */
import * as types from './actionTypes/ActionTypes';

/**
 * Action creator
 * @returns {{type}}
 */
export function setCheckOption(){
    return{
        type: types.UPDATECHECKED,
    };
}

/**
 * Action creator for startFetchPlayers
 */
export function startFetchPlayers(){
    return{
        type: types.START_FETCH_PLAYERS
    };
}
/**
 * Action for successFetchPlayers
 * @param result
 * @returns {{type, result: *}}
 */
export function successFetchPlayers(result){
    return{
        type: types.SUCCESS_FETCH_PLAYERS,
        players : result
    };
}
/**
 * Action for errorFetchPlayers
 */
export function errorFetchPlayers(){
    return{
        type: types.ERROR_FETCH_PLAYERS
    };
}
/**
 * fetchPlayersAsync action
 * Async action for get Players list
 * @returns {Function}
 */
export function fetchPlayersAsync(){
    let url = '/conf.json';
    return dispatch => {
        //dispatch startFetchPlayers action   fetch 시작을 알림
        dispatch(startFetchPlayers());
        return fetch(url)
            .then(res => {
                //fetch 성공시 Data와 함께 successFetchPlayers action 발생
                //실패 시 errorFetchPlayers action 발생
                if(res.ok){
                    res.json().then(data => dispatch(successFetchPlayers(data)));
                } else if(res.status == 401){
                    dispatch(errorFetchPlayers());
                }
            });
    };
}
