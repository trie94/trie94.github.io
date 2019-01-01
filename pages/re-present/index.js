import React from 'react';
import '../pages.scss';
import './represent.scss';

import Header from '../../common/header/header';
import Summary from '../summary-template';
import content from './represent.json';

import experience_flow from '../../assets/imgs/re-present/re-present_experience_flow.png';
import data_flow from '../../assets/imgs/re-present/re-present_data_flow.png';
import trackers from '../../assets/imgs/re-present/re-present_trackers.png';
import analyzers from '../../assets/imgs/re-present/re-present_analyzers.png';
import summary from '../../assets/imgs/re-present/re-present_session_summary.png';
import data_framework from '../../assets/imgs/re-present/re-present_data_framework.png';
import data_doc from '../../assets/pdfs/re-present_data_documentation.pdf';

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
                    <img className="content-full-img" src={data_flow} />
                    <p className="section-wrappers-continue post">{content.section2}</p>
                    <p className="section-wrappers-continue post">{content.section3}</p>
                    <img className="content-full-img" src={trackers} />
                    <p className="section-wrappers-continue post">{content.section4}</p>
                    <img className="content-full-img" src={analyzers} />
                    <p className="section-wrappers-continue post">{content.section5}</p>
                    <img className="content-full-img" src={summary} />
                    <p className="section-wrappers post">{content.section6}</p>
                    <p className="sub-titles">Data Structure</p>
                    <img className="content-full-img" src={data_framework} />
                    <p className="section-wrappers post">{content.section7}
                    <br />
                    <a href={data_doc} target="_blank">More detailed data documentation can be found in here.</a></p>
                    <p className="sub-titles">Timeline Interaction</p>
                    <p className="section-wrappers-continue post">{content.section8}</p>
                    <p className="section-wrappers post">{content.section9}</p>
                    </div>
            </div>
        )
    }
}

export default Represent;