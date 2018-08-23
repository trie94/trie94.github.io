import React from 'react';
import './work.scss';
import { Link } from "react-router-dom";

import border from '../../../assets/imgs/border.png';
import arrow from '../../../assets/imgs/arrow.png';

class Work extends React.Component {
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
                    <div className="readmore"><p className="see-more"><Link to="/works">SEE MORE</Link></p>
                    <Link to="/works"><img className="arrow" src={arrow} ></img></Link>
                    </div>
                    <img className="row-line" src={border} />
                </div>
            </div>
        );
    }
}

export default Work;