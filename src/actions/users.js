export function ADD_USERS(users) {
    return (dispatch) => {
        return dispatch({ type: 'ADD_USERS', payload: users })
    };
}