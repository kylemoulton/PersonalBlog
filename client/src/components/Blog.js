import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import BlogPostCard from './blogPosts/BlogPostCard';

class Blog extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        if (this.props.blogs) {
            return _.map(this.props.blogs, blog => {
                return <BlogPostCard
                    key={blog._id}
                    blog={ blog }
                />;
            });
        }
        else {
            return <p>Loading...</p>;
        }

    }

    render() {
        return(
            <div>
                <h1 style={{ textAlign: 'center' }}>
                    Blog
                </h1>
                {this.renderPosts()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { blogs: state.blogs };
}

export default connect(mapStateToProps, { fetchPosts })(Blog);