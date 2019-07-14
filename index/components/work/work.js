import React from 'react';
import './work.scss';
import { Link } from "react-router-dom";

import arrow from '../../../assets/imgs/arrow.png';

import brick_thumb from '../../../assets/imgs/thumbnails/brick_thumb.png';
// import tilt_thumb from '../../../assets/imgs/thumbnails/tilt_thumb.png';
import arpet_thumb from '../../../assets/imgs/thumbnails/arpet_thumb.png';
import represent_thumb from '../../../assets/imgs/thumbnails/re-present_thumb.png';

import brick_content from '../../../pages/brick/brick.json';
// import tilt_content from '../../../pages/tilt/tilt.json';
import arpet_content from '../../../pages/arpet/arpet.json';
import represent_content from '../../../pages/re-present/represent.json';

class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='work'>
                <div id="work" className="titles">FEATURED WORKS</div>
                <div className="row">

                    <div className='dev1'>
                        <Link to="/arpet">
                            <img className="thumb-img" src={arpet_thumb} />
                            <div className="overlay">
                                <div className="overlay-content">
                                    <p className="overlay-content-title">
                                        {arpet_content.title}</p>
                                    <p className="overlay-content-summary">
                                        {arpet_content.thumb}</p>
                                    <p className="overlay-content-tags">
                                        {arpet_content.tags}</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className='dev2'>
                        <Link to="/brick">
                            <img className="thumb-img" src={brick_thumb} />
                            <div className="overlay">
                                <div className="overlay-content">
                                    <p className="overlay-content-title">
                                        {brick_content.title}</p>
                                    <p className="overlay-content-summary">
                                        {brick_content.thumb}</p>
                                    <p className="overlay-content-tags">
                                        {brick_content.tags}</p>
                                </div>
                            </div>
                        </Link>

                    </div>

                    <div className='dev3'>
                        <Link to="/re-present">
                            <img className="thumb-img" src={represent_thumb} />
                            <div className="overlay">
                                <div className="overlay-content">
                                    <p className="overlay-content-title">
                                        {represent_content.title}</p>
                                    <p className="overlay-content-summary">
                                        {represent_content.thumb}</p>
                                    <p className="overlay-content-tags">
                                        {represent_content.tags}</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="readmore"><p className="see-more"><Link to="/works">SEE MORE</Link></p>
                        <Link to="/works"><img className="arrow" src={arrow} ></img></Link>
                    </div>
                </div >
            </div >
        );
    }
}

export default Work;