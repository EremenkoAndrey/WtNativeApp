import api from '../services/api';
import normalize from '../utils/normalize';
import { ADD_ACTIVITIES } from './activity';
import { ADD_POSTS } from './posts';
import { ADD_USERS } from './users';
import { ADD_COMMENTS } from './comments';
import { ADD_TOOLS } from './tools';
import ERROR_HANDLER from './errors';

function FETCH_FEED_SUCCESSFUL(res) {
    return (dispatch) => {
        const { boundary, boundaryRecordId, records } = res;
        const ids = records
            .map(record => ({ id: `${record.id}` }))
            .filter(({ id }) => !!id);

        const {
            activity, post: posts, user: users, comment: comments, instrument: tools
        } = normalize(records);
        if (activity) {
            dispatch(ADD_ACTIVITIES(activity));
        }
        if (posts) {
            dispatch(ADD_POSTS(posts));
        }
        if (users) {
            dispatch(ADD_USERS(users));
        }
        if (comments) {
            dispatch(ADD_COMMENTS(comments));
        }
        if (tools) {
            dispatch(ADD_TOOLS(tools));
        }
        return dispatch({ type: 'FETCH_FEED_SUCCESSFUL', payload: { boundary, boundaryRecordId, ids } });
    };
}

export function FETCH_FEED(userId) {
    return (dispatch, getState) => {
        const { user, feed } = getState();
        const params = [
            user.settings.lang,
            userId,
            1, // номер сущности user,
            'feed', // тип выборки ('feed'/'timeline')
            feed.boundary,
            feed.boundaryRecordId,
            feed.enableRecommendations,
            feed.orderBy,
            0, 10
        ];
        if (!feed.loading && !feed.stopLoad) {
            api.getUserFeed(params)
                .then((res) => {
                    dispatch(FETCH_FEED_SUCCESSFUL(res));
                })
                .catch(err => dispatch(ERROR_HANDLER(err)));
        }
        return dispatch({ type: 'FETCH_FEED' });
    };
}

export function TOGGLE_RECOMMENDATIONS() {
    return dispatch => dispatch({ type: 'TOGGLE_RECOMMENDATIONS' });
}
