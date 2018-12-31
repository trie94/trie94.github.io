import React from 'react';
import dashed_border from '../assets/imgs/dashed_border.png';

class Summary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
        <div className='work-content'>
            <div className="work-title">{this.props.content.title}</div>
            <div className="video-wrapper">
                <iframe className="work-video" src={this.props.content.src} allowfullscreen="allowfullscreen" /></div>
            <div className="work-summary post">{this.props.content.summary}</div>
            <div className="bullet-wrapper post">
            <p className="bullets"><span className="bullet-titles">&bull; Duration:</span> {this.props.content.duration}</p>
            <p className="bullets"><span className="bullet-titles">&bull; Role:</span> {this.props.content.role}</p>
            <p className="bullets"><span className="bullet-titles">&bull; Platform:</span> {this.props.content.platform}</p>
            <p className="bullets"><span className="bullet-titles">&bull; Tool:</span> {this.props.content.tool}</p>
            </div>
        </div>
        )
    }
}

export default Summary;