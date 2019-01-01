import React from 'react';
import '../pages.scss';
import './represent.scss';

import Header from '../../common/header/header';
import Summary from '../summary-template';
import content from './represent.json';

import experience_flow from '../../assets/imgs/re-present/re-present-experience-flow.png';

class Represent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header title={content.title} link={content.link} />
                <Summary content={content} />
                <div className="main-content">
                    <p className="sub-titles">Practice-Review Iteration Cycle</p>
                    <img className="content-full-img" src={experience_flow} />
                    <p className="section-wrappers post">{content.section1}</p>
                    <p className="sub-titles">Data Flow</p>
                    <p className="section-wrappers post">{content.section2}</p>
                </div>
            </div>
        )
    }
}

export default Represent;