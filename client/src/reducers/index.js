import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import blogReducer from './blogReducer';
import blogPostReducer from './blogPostReducer';
import projectsReducer from './projectsReducer';
import projectReducer from './projectReducer';

export default combineReducers({
    auth: authReducer,
    blogs: blogReducer,
    blogPost: blogPostReducer,
    projects: projectsReducer,
    project: projectReducer,
    form: reduxForm
});