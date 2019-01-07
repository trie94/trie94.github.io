import React from 'react';
import './../pages.scss';

import Header from '../../common/header/header';
import ProjectList from '../project-list-template';
import the_body from './the-body.json';
import my_little_doctor from './my-little-doctor.json';
import tbtb from './tbtb.json';
import halo from './halo.json';

class PastWork extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <Header title="PAST WORK" link="/past-work" />
                <div className='works'>
                <ProjectList content={the_body}/>
                <ProjectList content={my_little_doctor}/>
                <ProjectList content={tbtb}/>
                <ProjectList content={halo}/>
                </div>
            </div>
        )
    }
}

export default PastWork;