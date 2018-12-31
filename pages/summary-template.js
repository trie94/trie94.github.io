import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faHandPointRight } from '@fortawesome/free-regular-svg-icons';

String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function RenderLinks(props) {
    const hasLink = (props.props) ? true : false;

    if (hasLink)
        return <GetLink props={props.props} />;

    return null;
}

function GetLink(props) {
    let string = props.props;
    let substring = "git";

    if (string.indexOf(substring) !== -1) {
        // console.log(props.props);
        return <a href={props.props} target="_blank">
            <FontAwesomeIcon icon={faGithubAlt} /> Github repo</a>;
    }
    else {
        // console.log(props.props);
        return <a href={props.props} target="_blank">
            <FontAwesomeIcon icon={faHandPointRight} /> Prototype</a>;
    }
}

class Summary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='work-content'>
                <div className="work-title">{this.props.content.title}</div>
                <div className="video-wrapper">
                    <iframe className="work-video" src={this.props.content.src} allowFullScreen="allowFullScreen" /></div>
                <div className="work-summary post">{this.props.content.summary}</div>
                <div className="bullet-wrapper post">
                    <p className="bullets"><span className="bullet-titles">&bull; Duration:</span> {this.props.content.duration}</p>
                    <p className="bullets"><span className="bullet-titles">&bull; Role:</span> {this.props.content.role}</p>
                    <p className="bullets"><span className="bullet-titles">&bull; Platform:</span> {this.props.content.platform}</p>
                    <p className="bullets"><span className="bullet-titles">&bull; Tool:</span> {this.props.content.tool}</p>
                </div>
                <RenderLinks props={this.props.content.repo} />
                <br />
                <RenderLinks props={this.props.content.prototype} />
            </div>
        )
    }
}

export default Summary;