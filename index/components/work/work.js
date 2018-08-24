import React from 'react';
import './work.scss';
import { Link } from "react-router-dom";

import border from '../../../assets/imgs/border.png';
import arrow from '../../../assets/imgs/arrow.png';

import brick_thumb from '../../../assets/imgs/thumbnails/brick_thumb.png';
import tilt_thumb from '../../../assets/imgs/thumbnails/tilt_thumb.png';
import frankenstein_thumb from '../../../assets/imgs/thumbnails/frankenstein_thumb.png';
import thumb_frame from '../../../assets/imgs/thumbnails/thumb_frame.png';

class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='work'>
                <div id="work">WORK</div>
                <div className="row">
                    <div className='dev1'>
                        <img className="thumb-frame" src={thumb_frame} />
                        <Link to="/brick" ><img className="thumb-img" src={brick_thumb} /></Link>
                    </div>
                    <div className='dev2'>
                        <img className="thumb-frame" src={thumb_frame} />
                        <Link to="/tilt"><img className="thumb-img" src={tilt_thumb} /></Link>
                    </div>
                    <div className='dev3'>
                        <img className="thumb-frame" src={thumb_frame} />
                        <Link to="/frankenstein"><img className="thumb-img" src={frankenstein_thumb} /></Link>
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