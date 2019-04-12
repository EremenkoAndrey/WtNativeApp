export function ADD_TOOLS(tools) {
    return (dispatch) => {
        return dispatch({ type: 'ADD_TOOLS', payload: tools })
    };
}
