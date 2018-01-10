import axios from 'axios';
import { FETCH_POSTS, FETCH_USER } from './types';

export const fetchPosts = () => async dispatch => {
    const res = await axios.get('/api/blog_posts');
    dispatch({ type: FETCH_POSTS, payload: res.data });
}

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });   
}

export const createPost = (values, history) => async dispatch => {
    const res = await axios.post('api/blog_posts', values); 
    dispatch({ type: FETCH_POSTS, payload: res.data });
}

export const deletePost = (blogId) => async dispatch => {
    const res = await axios.delete('api/blog_posts/' + blogId);
    dispatch ({ type: FETCH_POSTS, payload: res.data});
}

export const createComment = (blogId, values) => async dispatch => {
    const res = await axios.post('api/blog_posts/' + blogId + '/comments', values);
    dispatch ({ type: FETCH_POSTS, payload: res.data});
}

export const deleteComment = (blogId, commentId) => async dispatch => {
    const res = await axios.delete('api/blog_posts/' + blogId + '/comments/' + commentId);
    dispatch ({ type: FETCH_POSTS, payload: res.data});
}