import React from 'react';
import './../pages.scss';

import Header from '../../common/header/header';
import ProjectList from '../project-list-template';
import brick_content from './../brick/brick.json';
import arpet_content from './../arpet/arpet.json';
import represent_content from './../re-present/represent.json';
import tilt_content from './../tilt/tilt.json';
import frankenstein_content from './../frankenstein/frankenstein.json';
import sketchbook_content from './../sketchbook-project/sketchbook.json';

import sketchbook_src from './../../assets/imgs/sketchbook/sketchbook.png';

class Works extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <Header title="WORKS" link="/works" />
                <div className='works'>
                <ProjectList content={arpet_content}/>
                <ProjectList content={brick_content}/>
                <ProjectList content={sketchbook_content} prototypeName="Sketchbook"/>
                <ProjectList content={represent_content} prototypeName="Project Website"/>
                <ProjectList content={tilt_content}/>
                <ProjectList content={frankenstein_content}
                prototypeName="Project Website"/>
                </div>
            </div>
        )
    }
}

export default Works;