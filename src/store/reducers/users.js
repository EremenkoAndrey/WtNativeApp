import twoLevelMerge from '../../utils/two-level-merge';

export default (state = {}, action) => {
    switch (action.type) {
    case 'ADD_USERS':
        return twoLevelMerge(state, action.payload);
    default:
        return state;
    }
};
