import React from 'react';
import './projects.scss';
import { Link } from "react-router-dom";

import border from '../../../assets/imgs/border.png';

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
                        <Link to="/ar-vr-dev" >AR/VR DEV</Link>
                    </div>
                    <div className='dev2'>
                        <Link to="/web-dev">WEB DEV</Link>
                    </div>
                <img className="row-line" src={border}/>
                </div>
            </div>
        );
    }
}

export default Projects;