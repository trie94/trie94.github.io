import React from 'react';
import '../pages.scss';
import './represent.scss';

import Header from '../../common/header/header';
import Summary from '../summary-template';
import content from './represent.json';

class Represent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header title={content.title} link={content.link} />
                <Summary content={content} />
                <div className="main-content">
                </div>
            </div>
        )
    }
}

export default Represent;