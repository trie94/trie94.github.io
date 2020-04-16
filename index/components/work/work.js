import React from 'react';
import './work.scss';
import { Link } from "react-router-dom";

import arrow from '../../../assets/imgs/arrow.png';

import brick_thumb from '../../../assets/imgs/thumbnails/brick_thumb.png';
import arpet_thumb from '../../../assets/imgs/thumbnails/arpet_thumb.png';
import cell_thumb from '../../../assets/imgs/thumbnails/cell_thumb.png';

import brick_content from '../../../pages/brick/brick.json';
import arpet_content from '../../../pages/arpet/arpet.json';
import cell_content from '../../../pages/keep-me-alive/keep-me-alive.json';

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
                        <Link to="/keep-me-alive">
                            <img className="thumb-img" src={cell_thumb} />
                            <div className="overlay">
                                <div className="overlay-content">
                                    <p className="overlay-content-title">
                                        {cell_content.title}</p>
                                    <p className="overlay-content-summary">
                                        {cell_content.thumb}</p>
                                    <p className="overlay-content-tags">
                                        {cell_content.tags}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='dev2'>
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
                    <div className='dev3'>
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

                    <div className="readmore"><p className="see-more"><Link to="/works">SEE MORE</Link></p>
                        <Link to="/works"><img className="arrow" src={arrow} ></img></Link>
                    </div>
                </div >
            </div >
        );
    }
}

export default Work;