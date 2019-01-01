import React from 'react';
import '../pages.scss';
import './brick.scss';
import './../../common/components/prism/prism.css';
import Prism from './../../common/components/prism/prism';

import Header from '../../common/header/header';
import Summary from '../summary-template';
import content from './brick.json';

import grab1 from '../../assets/imgs/brick/grab1.gif';
import grab2 from '../../assets/imgs/brick/grab2.gif';
import networkTransform from '../../assets/imgs/brick/brick_network_transform.png';

class Brick extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount()
    {
        Prism.highlightAll();
    }

    render() {
        content.code1 = content.code1.replaceAll("\&hellip;", "\u2026");
        content.code2 = content.code2.replaceAll("\&hellip;", "\u2026");
        content.code3 = content.code3.replaceAll("\&hellip;", "\u2026");

        return (
            <div>
                <Header title={content.title} link={content.link} />
                <Summary content={content} />
                <div className="main-content">
                    <p className="sub-titles">Grab, Match, and Collaborate!</p>
                    <p className="section-wrappers post">{content.section1}</p>
                    <div className="sections">
                        <p className="sub-titles"> Block Interaction</p>
                        <div className="content-img-wrapper">
                            <img className="content-img content-img-left" src={grab1} />
                            <img className="content-img content-img-right" src={grab2} />
                        </div>
                        <p className="section-continue post">{content.section2}</p>
                        <p className="section-continue post">{content.section3}</p>
                        <p className="section-wrappers post">{content.section4}</p>
                        <p className="sub-titles"> Network Transform</p>
                        <div className="content-full-img-wrapper">
                            <img className="content-full-img" src={networkTransform} />
                        </div>
                        <p className="section-continue post">{content.section5}</p>
                        <p className="section-continue post">{content.section6}</p>                        <div className="section-code">
                            <pre><code className="language-clike section-code-snippet" spellCheck="false">
                            {content.code1}
                            </code></pre>
                        </div>
                        <div className="section-code">
                            <pre><code className="language-clike section-code-snippet" spellCheck="false">{content.code2}
                            </code></pre>
                        </div>
                        <div className="section-code">
                            <pre><code className="language-clike section-code-snippet" spellCheck="false">{content.code3}
                            </code></pre>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Brick;