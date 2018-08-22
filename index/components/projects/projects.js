import React from 'react';
import './projects.scss';
import { Link } from "react-router-dom";

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='projects'>
                <div id="work">WORK</div>
                <div className="row">
                    <div className='dev1'>
                        <Link to="/ar-vr-dev" >AR/VR Dev</Link>
                    </div>
                    <div className='dev2'>
                        <Link to="/web-dev">web Dev</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;