import React from 'react';
import RenderLinks from './../common/common-functions/RenderLinks';
import RenderPrototype from './../common/common-functions/RenderPrototype';
import RenderListSummary from './../common/common-functions/RenderListSummary';
import RenderTitle from './../common/common-functions/RenderTitle';

class ProjectList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className='work-content'>
                <RenderTitle props={this.props.content} />
                <RenderLinks props={this.props.content.repo} />
                <RenderLinks props={this.props.content.twitter} prototypeName="Twitter Thread" />
                <RenderLinks props={this.props.content.prototype} prototypeName={this.props.prototypeName} />
                <RenderLinks props={this.props.content.blog} prototypeName="Dev Blog"/>
                <RenderPrototype props={this.props.content.src} />
                <RenderListSummary props={this.props.content} />
            </div>
        )
    }
}

export default ProjectList;
