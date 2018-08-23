import React from 'react';
import './works.scss';
import Header from '../../common/header/header';

class Works extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div>
                <Header title="WORKS" link="/works" />
                <div className='works'>
                project list
                </div>
            </div>
        )
    }
}

export default Works;