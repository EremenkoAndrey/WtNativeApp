export function ADD_ACTIVITIES(activities) {
    return (dispatch) => {
        return dispatch({ type: 'ADD_ACTIVITIES', payload: activities })
    };
}