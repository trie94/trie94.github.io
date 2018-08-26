import React from 'react';
import './brick.scss';
import Header from '../../common/header/header';
import content from './brick.json';

class Brick extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div>
                <Header title="BRICK" link="/brick" />
                <div className='work-content'>
                    <div className="work-title">{content.title}</div>
                    <div className="video-wrapper">
                    <iframe className="work-video" src="https://www.youtube.com/embed/QHMHPzehOLA" /></div>
                    <div className="work-summary">{content.summary}</div>
                </div>
            </div>
        )
    }
}

export default Brick;