import React from 'react';
import '../pages.scss';
import './tilt.scss';

import Header from '../../common/header/header';
import Summary from '../summary-template';
import content from './tilt.json';

import interaction_model from '../../assets/imgs/tilt/interaction_model.png';
import system_architecture from '../../assets/imgs/tilt/system_architecture.png';
import prototype_model from '../../assets/imgs/tilt/prototype_model.png';
import scoring_system from '../../assets/imgs/tilt/scoring_system.png';

class Tilt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header title="TILT" link="/tilt" />
                <Summary content={content} />
                <div className="main-content">
                    <p className="sub-titles">key features</p>
                    <p className="section-wrappers post">
                        {content.section1}<br/>
                        {content.section2}<br/>
                        {content.section3}<br/>
                    </p>

                    <p className="sub-titles">how prototype works</p>
                    <p className="section-wrappers post">{content.section4}</p>
                    <p className="section-wrappers post">
                        &bull; Bias spectrum: {content.bias_spectrum}<br/>
                        &bull; Credibility spectrum: {content.credibility_spectrum}<br/>
                    </p>
                    
                    <p className="sub-titles">interaction model</p>
                    <div className="content-full-img-wrapper">
                        <img className="content-full-img" src={interaction_model} />
                    </div>
                    <p className="section-wrappers post">{content.section5}</p>

                    <p className="sub-titles">scoring system</p>
                    <div className="content-full-img-wrapper">
                        <img className="content-full-img" src={scoring_system} />
                    </div>                    
                    <p className="section-wrappers post">{content.section6}</p>
                    <p className="section-wrappers post">
                    1. Bias level: {content.bias_level}<br/>
                    2. Credibility level: {content.credibility_level}<br/>
                    3. Total number {content.total_number}<br/>
                    4. Average time {content.average_time}<br/>
                    </p>
                    
                    <div className="content-full-img-wrapper">
                        <img className="content-full-img" src={prototype_model} />
                    </div>
                    <p className='section-wrappers post'>{content.section7}</p>

                    <p className="sub-titles">architecture schematic</p>
                    <div className="content-full-img-wrapper">
                        <img className="content-full-img" src={system_architecture} />
                    </div>
                    <p className="section-wrappers"/>

                </div>
            </div>
        )
    }
}

export default Tilt;