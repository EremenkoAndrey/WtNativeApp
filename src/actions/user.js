import ERROR_HANDLER from './errors';
import api from '../services/api';
import { ADD_USERS } from './users';

function ADD_USER_SETTINGS(id, settings) {
    return dispatch => dispatch({ type: 'ADD_USER_SETTINGS', payload: { id, settings } });
}

export function FETCH_USER() {
    return (dispatch) => {
        api.getUser()
            .then((res) => {
                const { id, lcid, ...rest } = res;
                dispatch(ADD_USERS({ [id]: { ...rest } }));
                dispatch(ADD_USER_SETTINGS(id, { lang: lcid }));
            })
            .catch(err => dispatch(ERROR_HANDLER(err)));
        return dispatch({ type: 'FETCH_USER' });
    };
}
