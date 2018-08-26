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
                <iframe className="work-video" src={this.props.content.src} /></div>
            <div className="work-summary">{this.props.content.summary}</div>
            <div className="bullet-wrapper">
            <p className="bullets"><span className="bullet-titles">&bull; duration:</span> {this.props.content.duration}</p>
            <p className="bullets"><span className="bullet-titles">&bull; role:</span> {this.props.content.role}</p>
            <p className="bullets"><span className="bullet-titles">&bull; platform:</span> {this.props.content.platform}</p>
            <p className="bullets"><span className="bullet-titles">&bull; tool:</span> {this.props.content.tool}</p>
            </div>
        </div>
        )
    }
}

export default Summary;