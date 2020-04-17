import React from 'react';

import Header from '../../common/header/header';
import Summary from '../summary-template';
import content from './keep-me-alive.json';

import composite from '../../assets/imgs/keep-me-alive/composites.png'
import behavior_composite from '../../assets/imgs/keep-me-alive/behaviors-with-composite.png'
import cells from '../../assets/imgs/keep-me-alive/cells.png'
import erythrocyte from '../../assets/imgs/keep-me-alive/erythrocyte.png'
import leukocyte from '../../assets/imgs/keep-me-alive/leukocyte.png'
import platelet from '../../assets/imgs/keep-me-alive/platelet.png'
import oxygen from '../../assets/imgs/keep-me-alive/oxygen.png'

class KeepMeAlive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.prototypeName = "Game";
    }

    render() {
        return (
            <div>
                <Header title={content.title} link={content.link} />
                <Summary content={content} prototype={content.src} prototypeName={this.prototypeName} />
                <div className="main-content">
                    <p className="sub-titles">Composite Movement System</p>
                    <img className="content-full-img" src={behavior_composite} />
                    <p className="section-continue post">{content.section1}</p>
                    <img className="content-full-img" src={composite} />
                    <p className="section-wrappers post">{content.section2}</p>
                    <p className="sub-titles">Cell Shaders</p>
                    <div className="content-img-wrapper">
                        <img className="content-img-nomargin" src={erythrocyte} />
                        <img className="content-img-nomargin" src={leukocyte} />
                        <img className="content-img-nomargin" src={platelet} />
                        <img className="content-img-nomargin" src={oxygen} />
                        </div>
                    <p className="section-wrappers post">{content.section3}</p>
                </div>
            </div>
        )
    }
}

export default KeepMeAlive;
