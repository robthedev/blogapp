import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost} from "../actions";

class PostsShow extends Component {
    componentDidMount() {
       const id = this.props.match.params.id;
        this.props.fetchPost(id);
    }
    render() {
        const { post } = this.props;

        if (!post) {
            return <div>loading...</div>;
        }
//216163
    return (
            <div>
                <Link to="/">Back to home</Link>
                <h3>{post.title}</h3>
                <h4>Cate: {post.categories}</h4>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps( { posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);