const initialState = {
    list: [],
    boundary: null,
    boundaryRecordId: null,
    enableRecommendations: false,
    orderBy: 'rank',
    loading: false,
    stopLoad: false
};

export default (state = initialState, action) => {
    switch (action.type) {
    case 'FETCH_FEED':
        if (state.stopLoad) {
            return state;
        }
        return {
            ...state,
            loading: true
        };
    case 'FETCH_FEED_SUCCESSFUL':
        return {
            ...state,
            list: [...state.list, ...action.payload.ids],
            boundary: action.payload.boundary,
            boundaryRecordId: action.payload.boundaryRecordId,
            loading: false,
            stopLoad: action.payload.ids.length === 0
        };
    case 'TOGGLE_RECOMMENDATIONS':
        return {
            ...state,
            enableRecommendations: !state.enableRecommendations
        };
    default:
        return state;
    }
};
