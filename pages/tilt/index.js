import React from 'react';
import './tilt.scss';

import Header from '../../common/header/header';

class Tilt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header title="TILT" link="/tilt" />
                <div className='tilt'>
                tilt
                </div>
            </div>
        )
    }
}

export default Tilt;