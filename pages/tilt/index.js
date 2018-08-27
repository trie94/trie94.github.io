import React from 'react';
import '../pages.scss';
import './tilt.scss';

import Header from '../../common/header/header';
import Summary from '../summary-template';
import content from './tilt.json';

import interaction_model from '../../assets/imgs/tilt/interaction_model.png';

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
                    <p className="section-wrappers">
                        {content.section1}<br/><br/>
                        {content.section2}<br/><br/>
                        {content.section3}<br/><br/>
                    </p>

                    <p className="sub-titles">how prototype works</p>
                    <p className="section-wrappers">{content.section4}</p>
                    <p className="section-wrappers">
                        &bull; {content.bias_spectrum}<br/><br/>
                        &bull; {content.credibility_spectrum}<br/>
                    </p>
                    
                    <p className="sub-titles">interaction model</p>
                    <div className="content-full-img-wrapper">
                        <img className="content-full-img" src={interaction_model} />
                    </div>

                </div>
            </div>
        )
    }
}

export default Tilt;