export function ADD_POSTS(posts) {
    return (dispatch) => {
        return dispatch({ type: 'ADD_POSTS', payload: posts })
    };
}