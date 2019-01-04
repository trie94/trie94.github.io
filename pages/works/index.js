import React from 'react';
import './works.scss';
import Header from '../../common/header/header';
import PrjectList from '../project-list-template';

class Works extends React.Component {
    constructor(props) {
        super(props);
        this.proj1 = "project1";
        this.proj2 = "project2";
    }

    render() {

        return (
            <div>
                <Header title="WORKS" link="/works" />
                <div className='works'>
                project list
                <PrjectList name={this.proj1}/>
                <PrjectList name={this.proj2}/>
                </div>
            </div>
        )
    }
}

export default Works;