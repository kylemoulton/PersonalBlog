import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import blogReducer from './blogReducer';

export default combineReducers({
    auth: authReducer,
    blogs: blogReducer,
    form: reduxForm
});