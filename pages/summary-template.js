import React from 'react';
import RenderLinks from './../common/common-functions/RenderLinks';
import RenderPrototype from './../common/common-functions/RenderPrototype';

String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

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