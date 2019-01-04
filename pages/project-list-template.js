import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faHandPointRight } from '@fortawesome/free-regular-svg-icons';

class ProjectList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // console.log(this.props.name);
        return (
            <div className='work-content'>
                {this.props.name}
            </div>
        )
    }
}

export default ProjectList;