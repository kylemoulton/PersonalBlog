import React, { Component } from 'react';

class BlogPost extends Component {
    render() {
        console.log(this.props.match.params.id);
        return (
            <div>
                Blog Post View Test
            </div>
        );
    }
}

export default BlogPost;