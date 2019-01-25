import React from 'react';
import RenderLinks from './../common/common-functions/RenderLinks';

class DevBlogTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='work-content'>
                <div className="work-title">{this.props.content.title}</div>

            </div>
        )
    }
}

export default DevBlogTemplate;
