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

    let prototypeName = (props.prototypeName === undefined || props.prototypeName === null) ?
        prototypeName = "Prototype" : props.prototypeName;



    if (hasLink)
        return <GetLink props={props.props} name={prototypeName}/>;

    return null;
}

function GetLink(props) {
    let string = props.props;
    const substring = "git";
    let title = title;
    let name = ' ' + props.name;

    if (string.indexOf(substring) !== -1) {
        return <a href={props.props} target="_blank">
            <FontAwesomeIcon icon={faGithubAlt} /> GitHub Repo</a>;
    }
    else {
        return <a href={props.props} target="_blank">
            <FontAwesomeIcon icon={faHandPointRight} /> 
            {name}</a>;
    }
}

function RenderPrototype(props) {
    let proto = props.props;

    if (proto === null || proto === undefined)
        return null;

    if (proto.indexOf("gif") !== -1) {
        return <img className="content-full-img" src={props.props} />
    }
    else {
        return <div className="video-wrapper">
        <iframe className="work-video" src={props.props} allowFullScreen="allowFullScreen" /></div>
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
                <RenderPrototype props={this.props.prototype}/>
                <div className="work-summary post">{this.props.content.summary}</div>
                <div className="bullet-wrapper post">
                    <p className="bullets"><span className="bullet-titles">&bull; Duration:</span> {this.props.content.duration}</p>
                    <p className="bullets"><span className="bullet-titles">&bull; Role:</span> {this.props.content.role}</p>
                    <p className="bullets"><span className="bullet-titles">&bull; Platform:</span> {this.props.content.platform}</p>
                    <p className="bullets"><span className="bullet-titles">&bull; Tool:</span> {this.props.content.tool}</p>
                </div>
                <RenderLinks props={this.props.content.repo} />
                <br />
                <RenderLinks props={this.props.content.prototype} prototypeName={this.props.prototypeName}/>
            </div>
        )
    }
}

export default Summary;