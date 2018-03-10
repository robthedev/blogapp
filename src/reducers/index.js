import { combineReducers } from 'redux';
import PostsReducer from './reducers_posts';

const rootReducer = combineReducers({
  state: PostsReducer
});

export default rootReducer;
