import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost} from "../actions";

class PostsShow extends Component {
    componentDidMount() {
       const id = this.props.match.params.id;
        this.props.fetchPost(id);
    }
    render() {
        const { post } = this.props;

    return(
            <div>
                <h3>{post.title}</h3>
                <h4>CAr: {post.categories}</h4>
                <h6>{post.content}</h6>
            </div>
        );
    }
}

function mapStateToProps( { posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);