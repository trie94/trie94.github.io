import React from 'react';
import '../pages.scss';
import './tilt.scss';
import Prism from './../../common/components/prism/prism';

import Header from '../../common/header/header';
import Summary from '../summary-template';
import content from './tilt.json';

import media_list from '../../assets/imgs/tilt/media_list.png';
import prototype_model from '../../assets/imgs/tilt/prototype_model.png';
import scoring_system from '../../assets/imgs/tilt/scoring_system.png';
import tilt_prototype from '../../assets/imgs/tilt/tilt_prototype.gif';

import progress1 from '../../assets/imgs/tilt/tilt_progress1.png';
import progress2 from '../../assets/imgs/tilt/tilt_progress2.png';
import progress3 from '../../assets/imgs/tilt/tilt_progress3.png';
import componentDesign from '../../assets/imgs/tilt/tilt_component.png';

class Tilt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.prototypeName = "Prototype";
    }

    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        content.code5 = content.code5.replaceAll("\&hellip;", "\u2026");

        return (
            <div>
                <Header title="TILT" link="/tilt" />
                <Summary content={content} prototype={tilt_prototype} prototypeName={this.prototypeName} />
                <div className="main-content">
                    <p className="sub-titles">Idea Concept</p>
                    <div className="section-wrappers post">
                        <p className="indent">{content.section1}</p>
                        <p className="indent">{content.section2}</p>
                        <p className="indent">{content.section3}</p>
                    </div>

                    <p className="sub-titles">Proof of Concept</p>
                    <p className="section-wrappers-continue post">{content.section4}</p>
                    <div className="section-wrappers post">
                        <p className="indent">&bull; Media Bias Spectrum: {content.bias_spectrum}</p>
                        <p className="indent">&bull; Media Credibility Spectrum: {content.credibility_spectrum}</p>
                    </div>

                    <p className="sub-titles">Three Systems of Tilt</p>
                    <p className="section-wrappers-continue post">{content.section4_2}</p>
                    <img className="content-full-img" src={prototype_model} />

                    <p className="sub-titles-sub">User Profile Generating System</p>
                    <p className="section-wrappers post">{content.section5}</p>
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
                    <img className="content-full-img" src={scoring_system} />
                    <p className="section-wrappers-continue post">{content.section7}</p>
                    <p className="section-wrappers-continue post">{content.section7_2}</p>
                    <div className="section-code">
                        <pre><code className="language-javascript section-code-snippet" spellCheck="false">{content.code4}
                        </code></pre>
                    </div>
                    <div className="section-code">
                        <pre><code className="language-javascript section-code-snippet" spellCheck="false">{content.code5}
                        </code></pre>
                    </div>
                    <p className="section-wrappers post">{content.section7_3}</p>

                    <p className="sub-titles-sub">Report Rendering System</p>
                    <div className="content-img-wrapper">
                        <img className="content-img-75center" src={tilt_prototype} />
                    </div>
                    <p className="section-wrappers-continue post">{content.section8}</p>
                    <p className="section-wrappers post">{content.section9}</p>

                    <p className="sub-titles">Component Based Design</p>
                    <p className="section-wrappers-continue post">{content.section10}</p>
                    <div className="content-img-wrapper">
                            <img className="content-img content-img-left" src={progress2} />
                            <img className="content-img content-img-right" src={componentDesign} />
                        </div>
                    <div className="section-code">
                        <pre><code className="language-css section-code-snippet" spellCheck="false">{content.code6}
                        </code></pre>
                    </div>< br />

                </div>
            </div>
        )
    }
}

export default Tilt;