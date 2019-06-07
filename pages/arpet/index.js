import React from 'react';
import '../pages.scss';
import Prism from './../../common/components/prism/prism';

import Header from '../../common/header/header';
import Summary from '../summary-template';
import content from './arpet.json';

import merge from '../../assets/imgs/arpet/merge.png';
import blobby from '../../assets/imgs/arpet/blobby_t.jpg';
import bed_day from '../../assets/imgs/arpet/bedroom.png';
import bed_night from '../../assets/imgs/arpet/bedroom_night.png';
import tv from '../../assets/imgs/arpet/tv.png';
import v1 from '../../assets/imgs/arpet/visual1.png';
import v2 from '../../assets/imgs/arpet/visual2.png';
import v3 from '../../assets/imgs/arpet/visual3.png';
import v4 from '../../assets/imgs/arpet/visual4.png';

class Arpet extends React.Component {
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
                    <p className="sub-titles">Platform</p>
                    <img className="content-full-img" src={merge} />
                    <p className="section-wrappers post">
                        {content.section1}
                    </p>
                    <p className="sub-titles">Design</p>
                    <p className="section-wrappers post">{content.section2}</p>
                    {/* <img className="content-full-img" src={blobby} /> */}
                    <img className="content-img content-img-left" src={bed_day} />
                    <img className="content-img content-img-right" src={bed_night} />
                    {/* <img className="content-full-img" src={exterior} /> */}
                    <p className="sub-titles">Voice Interaction</p>
                    <div className="video-wrapper">
                        <iframe className="work-video" src={"https://www.youtube.com/embed/qOgb616LmBc?rel=0"} allowFullScreen="allowFullScreen" />
                    </div>
                    <p className="section-wrappers post">{content.section3}</p>
                    <p className="sub-titles">Emotional Feedback from Blobby</p>
                    <div className="video-wrapper">
                        <iframe className="work-video" src={"https://www.youtube.com/embed/jm8gNUt0wwQ?rel=0"} allowFullScreen="allowFullScreen" />
                    </div>
                    <p className="section-wrappers post">{content.section4}</p>
                    <p className="sub-titles">Visuals</p>
                    <img className="content-img content-img-left" src={v4} />
                    <img className="content-img content-img-right" src={v2} />
                    <img className="content-img content-img-left" src={v1} />
                    <img className="content-img content-img-right" src={v3} />
                    <p className="section-wrappers post">{content.section5}</p>
                </div>
            </div>
        )
    }
}

export default Arpet;
