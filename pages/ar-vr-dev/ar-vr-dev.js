import React from 'react';
import './ar-vr-dev.scss';

import Header from '../../common/header/header';

class ARVRDev extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <div>
                <Header title="AR/ VR Dev" link="/ar-vr-dev"/>
                <div className='ar-vr-dev'>
                ar-vr-dev
                </div>
            </div>
        )
    }
}

export default ARVRDev;