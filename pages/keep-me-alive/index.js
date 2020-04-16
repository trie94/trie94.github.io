import React from 'react';

import Header from '../../common/header/header';
import Summary from '../summary-template';
import content from './keep-me-alive.json';

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
                    {/* <p className="sub-titles">Composite Movement System</p> */}
                    {/* <img className="content-full-img" src={} /> */}
                    {/* <p className="section-wrappers post"> */}
                        {/* {content.section1} */}
                    {/* </p> */}
                    {/* <p className="sub-titles">Cell Shaders</p> */}
                    {/* <p className="section-wrappers post">{content.section2}</p> */}
                    {/* <img className="content-img content-img-left" src={bed_day} /> */}
                    {/* <img className="content-img content-img-right" src={bed_night} /> */}
                    {/* <p className="sub-titles">Modeling Blood Vessels and Boolean Operations on Meshes</p> */}
                    {/* <div className="video-wrapper"> */}
                        {/* <iframe className="work-video" src={"https://www.youtube.com/embed/qOgb616LmBc?rel=0"} allowFullScreen="allowFullScreen" /> */}
                    {/* </div> */}
                </div>
            </div>
        )
    }
}

export default KeepMeAlive;
