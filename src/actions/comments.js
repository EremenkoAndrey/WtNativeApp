export function ADD_COMMENTS(posts) {
    return (dispatch) => {
        return dispatch({ type: 'ADD_COMMENTS', payload: posts })
    };
}