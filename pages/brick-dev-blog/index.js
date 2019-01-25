import React from 'react';
import '../../pages/pages.scss';

import Header from '../../common/header/header';
import DevBlogTemplate from '../dev-blog-template';
import brick_dev from './brick-dev.json';

class BrickDevBlog extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header title={brick_dev.title} link={brick_dev.link} />
                <DevBlogTemplate content={brick_dev} />
            </div>
        )
    }
}

export default BrickDevBlog;
