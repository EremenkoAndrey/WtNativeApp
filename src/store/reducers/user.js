const initialState = {
    id: null,
    settings: {
        lang: 'ru'
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
    case 'ADD_USER_SETTINGS':
        return {
            id: action.payload.id,
            settings: {
                ...state.settings,
                ...action.payload.settings
            }
        };
    default:
        return state;
    }
};
