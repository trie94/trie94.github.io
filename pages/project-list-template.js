import React from 'react';
import RenderLinks from './../common/common-functions/RenderLinks';
import RenderPrototype from './../common/common-functions/RenderPrototype';
import RenderListSummary from './../common/common-functions/RenderListSummary';

class ProjectList extends React.Component {
    constructor(props) {
        super(props);
        this.urlHelper = (window.location.href).replace('/works', '');
    }

    render() {
        // console.log(this.urlHelper + '/' + this.props.content.src);

        return (
            <div className='work-content'>
                <div className="work-title"><a href={this.urlHelper + this.props.content.link}>
                    {this.props.content.title}</a></div>
                <RenderLinks props={this.props.content.repo} />
                <RenderLinks props={this.props.content.prototype} prototypeName={this.props.prototypeName} />
                <RenderPrototype props={this.props.content.src} />
                <RenderListSummary props={this.props.content}/>
                {/* <div className="work-summary post">
                    <a href={this.urlHelper + this.props.content.link}>
                        <p>{this.props.content.summary}</p>
                        <p>{this.props.content.list_summary}</p>
                    </a>
                </div> */}
            </div>
        )
    }
}

export default ProjectList;