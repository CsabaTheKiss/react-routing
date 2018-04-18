import React, { Component } from 'react';

class Course extends Component {

    componentDidMount () {
        console.log('Link params: ', this.props.match.params);
    }

    render () {
        const courseId = +this.props.match.params.id;
        return (
            <div>
                <h1>_COURSE_TITLE_</h1>
                <p>You selected the Course with ID: {courseId}</p>
            </div>
        );
    }
}

export default Course;