import React from 'react';

import Header from '../../common/header/header';
import Summary from '../summary-template';
import content from './keep-me-alive.json';

import composite from '../../assets/imgs/keep-me-alive/composites.png'
import behavior_composite from '../../assets/imgs/keep-me-alive/behaviors-with-composite.png'
import erythrocyte from '../../assets/imgs/keep-me-alive/erythrocyte.png'
import leukocyte from '../../assets/imgs/keep-me-alive/leukocyte.png'
import platelet from '../../assets/imgs/keep-me-alive/platelet.png'
import oxygen from '../../assets/imgs/keep-me-alive/oxygen.png'
import node_path from '../../assets/imgs/keep-me-alive/node-path.png'
import nodes from '../../assets/imgs/keep-me-alive/nodes.png'
import segments from '../../assets/imgs/keep-me-alive/segments.png'
import path_first from '../../assets/imgs/keep-me-alive/path-first.png'
import path_second from '../../assets/imgs/keep-me-alive/path-second.png'
import path_third from '../../assets/imgs/keep-me-alive/path-third.png'
import path_fourth from '../../assets/imgs/keep-me-alive/path-fourth.png'

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
                        <img className="content-img" src={erythrocyte} />
                        <img className="content-img" src={leukocyte} />
                    </div>
                    <div className="content-img-wrapper">
                        <img className="content-img" src={platelet} />
                        <img className="content-img" src={oxygen} />
                    </div>
                    <p className="section-wrappers post">{content.section3}</p>
                    <p className="sub-titles">Blood Vessels</p>
                    <p className="section-continue post">{content.section4}</p>
                    <img className="content-full-img" src={node_path} />
                    <img className="content-img" src={nodes} />
                    <img className="content-img" src={segments} />
                    <p className="section-continue post">{content.section5}</p>
                    <p className="section-continue post">{content.section6}</p>
                    <img className="content-full-img" src={path_first} />
                    <p className="section-continue post">{content.section7}</p>
                    <img className="content-full-img" src={path_second} />
                    <p className="section-continue post">{content.section8}</p>
                    <img className="content-full-img" src={path_third} />
                    <p className="section-continue post">{content.section9}</p>
                    <img className="content-full-img" src={path_fourth} />
                    <p className="section-wrappers post"></p>
                </div>
            </div>
        )
    }
}

export default KeepMeAlive;
