export default function ERROR_HANDLER(error) {
    return (dispatch) => {
        console.log('ERROR_HANDLER', error);

        return dispatch({ type: 'ERROR_HANDLER', payload: { error } })
    };
}