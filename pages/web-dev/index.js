import React from 'react';
import './web-dev.scss';

import Header from '../../common/header/header';

class WebDev extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header title="Web Dev" link="/web-dev" />
                <div className='web-dev components'>
                web-dev
                </div>
            </div>
        )
    }
}

export default WebDev;