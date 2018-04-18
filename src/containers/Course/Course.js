import React, { Component } from 'react';

class Course extends Component {

    componentDidMount () {
        console.log('Props: ', this.props);
        console.log('Link params: ', this.props.match.params);
        // parsing query params for ourselves
        const search = new URLSearchParams(this.props.location.search);
        console.log(search.entries().next().value);
    }

    render () {
        const courseId = +this.props.match.params.id;
        const search = new URLSearchParams(this.props.location.search);
        const courseTitle = search.entries().next().value[1];

        return (
            <div>
                <h1>{courseTitle}</h1>
                <p>You selected the Course with ID: {courseId}</p>
            </div>
        );
    }
}

export default Course;