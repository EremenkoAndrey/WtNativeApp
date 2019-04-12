import { combineReducers } from 'redux';
import errors from './errors';
import feed from './feed';
import user from './user';
import users from './users';
import activity from './activity';
import posts from './posts';
import comments from './comments';
import tools from './tools';

export default combineReducers({
    errors,
    feed,
    user,
    users,
    activity,
    posts,
    comments,
    tools
});
