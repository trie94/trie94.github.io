import React from 'react';
import './frankenstein.scss';
import Header from '../../common/header/header';

class Frankenstein extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div>
                <Header title="FRANKENSTEIN" link="/frankenstein" />
                <div className='frankenstein'>
                frankenstein
                </div>
            </div>
        )
    }
}

export default Frankenstein;