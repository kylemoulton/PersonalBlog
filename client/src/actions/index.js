import axios from 'axios';
import { FETCH_POSTS, FETCH_USER, FETCH_POST, FETCH_PROJECTS, FETCH_PROJECT } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });   
}

export const fetchPosts = () => async dispatch => {
    const res = await axios.get('/api/blog_posts');
    dispatch({ type: FETCH_POSTS, payload: res.data });
}

export const createPost = (values) => async dispatch => {
    const res = await axios.post('api/blog_posts', values); 
    dispatch({ type: FETCH_POSTS, payload: res.data });
}

export const fetchPost = (blogId) => async dispatch => {
    const res = await axios.get('/api/blog_posts/' + blogId);
    dispatch({ type: FETCH_POST, payload: res.data });
}

export const updatePost = (blogId, values) => async dispatch => {
    const res = await axios.put('/api/blog_posts/' + blogId, values);
    dispatch({ type: FETCH_POSTS, payload: res.data });
}

export const deletePost = (blogId) => async dispatch => {
    const res = await axios.delete('/api/blog_posts/' + blogId);
    dispatch ({ type: FETCH_POSTS, payload: res.data });
}

export const createComment = (blogId, values) => async dispatch => {
    const res = await axios.post('/api/blog_posts/' + blogId + '/comments', values);
    dispatch ({ type: FETCH_POSTS, payload: res.data });
}

export const deleteComment = (blogId, commentId) => async dispatch => {
    const res = await axios.delete('/api/blog_posts/' + blogId + '/comments/' + commentId);
    dispatch ({ type: FETCH_POSTS, payload: res.data });
}

export const createProject = (values) => async dispatch => {
    const res = await axios.post('/api/projects', values);
    dispatch({ type: FETCH_PROJECTS, payload: res.data });
}

export const fetchProjects = () => async dispatch => {
    const res = await axios.get('/api/projects');
    dispatch({ type: FETCH_PROJECTS, payload: res.data });
}

export const fetchProject = (projectId) => async dispatch => {
    const res = await axios.get('/api/projects/' + projectId);
    dispatch({ type: FETCH_PROJECT, payload: res.data });
}

export const updateProject = (projectId, values) => async dispatch => {
    const res = await axios.put('/api/projects/' + projectId, values);
    dispatch({ type: FETCH_PROJECTS, payload: res.data });
}

export const deleteProject = (projectId) => async dispatch => {
    const res = await axios.delete('/api/projects/' + projectId);
    dispatch ({ type: FETCH_PROJECTS, payload: res.data })
}