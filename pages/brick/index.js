import React from 'react';
import '../pages.scss';
import './brick.scss';

import Header from '../../common/header/header';
import Summary from '../summary-template';
import content from './brick.json';

import asym1 from '../../assets/imgs/brick/asymmetric1.jpg';
import asym2 from '../../assets/imgs/brick/asymmetric2.jpg';
import spawn_wall from '../../assets/imgs/brick/spawn_wall.gif';
import grab1 from '../../assets/imgs/brick/grab1.gif';
import grab2 from '../../assets/imgs/brick/grab2.gif';

class Brick extends React.Component {
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
                    <p className="sub-titles">grab, match, and collaborate!</p>
                    <p className="section-wrappers post">{content.section1}</p>

                    <div className="sections">
                        <p className="sub-titles">1. get colors (asymmetric role)</p>
                        <div className="content-img-wrapper">
                            <img className="content-img content-img-left" src={asym1} />
                            <img className="content-img content-img-right" src={asym2} />
                        </div>
                        <p className="section-wrappers post">{content.section2}</p>
                        <p className="sub-titles">2. spawn wall</p>
                        <div className="content-img-wrapper">
                            <img className="content-img" src={spawn_wall} />
                        </div>
                        <p className="section-wrappers post">{content.section3}</p>
                        <p className="sub-titles">3. grab a block and match it to grid</p>
                        <div className="content-img-wrapper post">
                            <img className="content-img content-img-left" src={grab1} />
                            <img className="content-img content-img-right" src={grab2} />
                        </div>
                        <p className="section-wrappers post">{content.section4}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Brick;