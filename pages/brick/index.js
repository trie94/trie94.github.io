import React from 'react';
import '../pages.scss';
import Header from '../../common/header/header';
import Summary from '../summary-template';
import content from './brick.json';

class Brick extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div>
                <Header title={content.title} link={content.link} />
                <Summary content={content}/>
            </div>
        )
    }
}

export default Brick;