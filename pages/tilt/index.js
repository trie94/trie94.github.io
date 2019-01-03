import React from 'react';
import '../pages.scss';
import './tilt.scss';
import Prism from './../../common/components/prism/prism';

import Header from '../../common/header/header';
import Summary from '../summary-template';
import content from './tilt.json';

import media_list from '../../assets/imgs/tilt/media_list.png';
import interaction_model from '../../assets/imgs/tilt/interaction_model.png';
import system_architecture from '../../assets/imgs/tilt/system_architecture.png';
import prototype_model from '../../assets/imgs/tilt/prototype_model.png';
import scoring_system from '../../assets/imgs/tilt/scoring_system.png';
import tilt_prototype from '../../assets/imgs/tilt/tilt_prototype.gif';

class Tilt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        return (
            <div>
                <Header title="TILT" link="/tilt" />
                <Summary content={content} />
                <div className="main-content">
                    <p className="sub-titles">Idea Concept</p>
                    <div className="section-wrappers post">
                        <p className="indent">{content.section1}</p>
                        <p className="indent">{content.section2}</p>
                        <p className="indent">{content.section3}</p>
                    </div>

                    <p className="sub-titles">Proof of Concept</p>
                    <p className="section-wrappers-continue post">{content.section4}</p>
                    <img className="content-full-img" src={prototype_model} />

                    <p className="sub-titles-sub">User Profile Generating System</p>
                    <p className="section-wrappers post">{content.section5}</p>
                    <div className="section-wrappers post">
                        <p className="indent">&bull; Media Bias Spectrum: {content.bias_spectrum}</p>
                        <p className="indent">&bull; Media Credibility Spectrum: {content.credibility_spectrum}</p>
                    </div>
                    <div className="section-code">
                        <pre><code className="language-javascript section-code-snippet" spellCheck="false">{content.code1}
                        </code></pre>
                    </div>
                    <p className="section-wrappers-continue post">{content.section6}</p>
                    <div className="section-code">
                        <pre><code className="language-javascript section-code-snippet" spellCheck="false">{content.code2}
                        </code></pre>
                    </div>
                    <img className="content-full-img" src={media_list} /><br />

                    <p className="sub-titles-sub">Scoring System</p>
                    <div className="content-full-img-wrapper">
                        <img className="content-full-img" src={scoring_system} />
                    </div>
                    <p className="section-wrappers post">{content.section7}</p>

                    <p className="sub-titles-sub">Report Rendering System</p>
                    <div className="content-img-wrapper">
                        <img className="content-img-75center" src={tilt_prototype} />
                    </div>
                    <p className="section-wrappers post">{content.section8}</p>
                </div>
            </div>
        )
    }
}

export default Tilt;