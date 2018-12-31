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
                    <div className="section-wrappers post">
                        <p className="indent">{content.section1}</p>
                        <p className="indent">{content.section2}</p>
                        <p className="indent">{content.section3}</p>
                    </div>

                    <p className="sub-titles">how prototype works</p>
                    <p className="section-wrappers post">{content.section4}</p>
                    <div className="section-wrappers post">
                        <p className="indent">&bull; Bias spectrum: {content.bias_spectrum}</p>
                        <p className="indent">&bull; Credibility spectrum: {content.credibility_spectrum}</p>
                    </div>

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
                    <div className="section-wrappers post">
                        <p className="indent">1. Bias level: {content.bias_level}</p>
                        <p className="indent">2. Credibility level: {content.credibility_level}</p>
                        <p className="indent">3. Total number {content.total_number}</p>
                        <p className="indent">4. Average time {content.average_time}</p>
                    </div>

                    <div className="content-full-img-wrapper">
                        <img className="content-full-img" src={prototype_model} />
                    </div>
                    <p className='section-wrappers post'>{content.section7}</p>

                    <p className="sub-titles">architecture schematic</p>
                    <div className="content-full-img-wrapper">
                        <img className="content-full-img" src={system_architecture} />
                    </div>
                    <p className="section-wrappers" />

                </div>
            </div>
        )
    }
}

export default Tilt;