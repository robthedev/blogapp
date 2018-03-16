import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    render() {
        return (
            <form action="">
                <Field
                    name="title"
                    componet={}
                />
            </form>
        );
    }
}

export default  reduxForm({
    form: 'PostsNewForm'
})(PostsNew);