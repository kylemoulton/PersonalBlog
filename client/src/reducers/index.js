import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import blogReducer from './blogReducer';
import blogPostReducer from './blogPostReducer';

export default combineReducers({
    auth: authReducer,
    blogs: blogReducer,
    blogPost: blogPostReducer,
    form: reduxForm
});