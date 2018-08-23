import React from 'react';
import './brick.scss';
import Header from '../../common/header/header';

class Brick extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div>
                <Header title="BRICK" link="/brick" />
                <div className='brick'>
                brick
                </div>
            </div>
        )
    }
}

export default Brick;