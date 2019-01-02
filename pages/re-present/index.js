import React from 'react';
import '../pages.scss';
import './represent.scss';

import Header from '../../common/header/header';
import Summary from '../summary-template';
import content from './represent.json';

import experience_flow from '../../assets/imgs/re-present/re-present_experience_flow.png';
import data_flow from '../../assets/imgs/re-present/re-present_data_flow.png';
import practice_review from '../../assets/imgs/re-present/re-present_practice_review.png';
import trackers from '../../assets/imgs/re-present/re-present_trackers.png';
import analyzers from '../../assets/imgs/re-present/re-present_analyzers.png';
import summary from '../../assets/imgs/re-present/re-present_session_summary.png';
import reflectors from '../../assets/imgs/re-present/re-present_reflectors.png';
import data_framework from '../../assets/imgs/re-present/re-present_data_framework.png';
import data_doc from '../../assets/pdfs/re-present_data_documentation.pdf';

import timeline from '../../assets/imgs/re-present/re-present_timeline.gif';
import timeline_shader from '../../assets/imgs/re-present/re-present_timeline_shader.gif';

class Represent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        content.code3 = content.code3.replaceAll("\&hellip;", "\u2026");
        content.code4 = content.code4.replaceAll("\&hellip;", "\u2026");

        return (
            <div>
                <Header title={content.title} link={content.link} />
                <Summary content={content} />
                <div className="main-content">
                    <p className="sub-titles">Practice-Review Iteration Cycle</p>
                    <img className="content-full-img" src={experience_flow} />
                    <p className="section-wrappers post">{content.section1}</p>
                    <img className="content-full-img" src={practice_review} />
                    <p className="section-wrappers post">{content.section2}</p>
                    <p className="sub-titles">Data Flow</p>
                    <img className="content-full-img" src={data_flow} />
                    <p className="section-wrappers post">{content.section3}</p>
                    <p className="sub-titles-sub"> Trackers</p>
                    <img className="content-full-img" src={trackers} />
                    <p className="section-wrappers post">{content.section4}</p>
                    <p className="sub-titles-sub"> Analyzers</p>
                    <img className="content-full-img" src={analyzers} />
                    <p className="section-wrappers post">{content.section5}</p>
                    <p className="sub-titles-sub"> Renderers</p>
                    <img className="content-full-img" src={summary} />
                    <p className="section-wrappers post">{content.section6}</p>
                    <p className="sub-titles-sub"> Reflectors</p>
                    <img className="content-full-img" src={reflectors} />
                    <p className="section-wrappers post">{content.section7}</p>
                    <p className="sub-titles">Data Structure</p>
                    <img className="content-full-img" src={data_framework} />
                    <p className="section-wrappers post">{content.section8}
                        <br />
                        <a href={data_doc} target="_blank">More detailed data documentation can be found in here.</a></p>
                    <p className="sub-titles">Timeline Interaction</p>
                    <img className="content-full-img" src={timeline} />
                    <p className="section-wrappers post">{content.section9}</p>
                    <p className="sub-titles-sub">Timeline Shader for Curved Design &amp; Scrubbing Feature</p>
                    <img className="content-full-img" src={timeline_shader} />
                    <p className="section-wrappers-continue post">{content.section10}</p>
                    <div className="section-code">
                        <pre><code className="language-clike section-code-snippet" spellCheck="false">{content.code1}
                        </code></pre>
                    </div>
                    <br/>
                    <p className="section-wrappers-continue post">{content.section11}</p>
                    <div className="section-code">
                        <pre><code className="language-clike section-code-snippet" spellCheck="false">{content.code2}
                        </code></pre>
                    </div>
                    <br/>
                    <p className="section-wrappers-continue post">{content.section12}</p>
                    <div className="section-code">
                        <pre><code className="language-clike section-code-snippet" spellCheck="false">{content.code3}
                        </code></pre>
                    </div>
                    <br/>
                    <p className="section-wrappers-continue post">{content.section14}</p>
                    <div className="section-code">
                        <pre><code className="language-clike section-code-snippet" spellCheck="false">{content.code4}
                        </code></pre>
                    </div>
                    <br/>
                </div>
            </div>
        )
    }
}

export default Represent;