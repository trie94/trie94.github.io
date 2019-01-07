import React from 'react';
import './../pages.scss';

import Header from '../../common/header/header';
import PrjectList from '../project-list-template';
import brick_content from './../brick/brick.json';
import represent_content from './../re-present/represent.json';
import tilt_content from './../tilt/tilt.json';
import frankenstein_content from './../frankenstein/frankenstein.json';
import sketchbook_content from './../sketchbook-project/sketchbook.json';

import sketchbook_src from './../../assets/imgs/sketchbook/rest-your-mind.gif';

class Works extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <Header title="WORKS" link="/works" />
                <div className='works'>
                <PrjectList content={brick_content}/>
                <PrjectList content={represent_content} prototypeName="Project Website"/>
                <PrjectList content={tilt_content}/>
                <PrjectList content={frankenstein_content}
                prototypeName="Project Website"/>
                <PrjectList content={sketchbook_content} prototypeName="Sketchbook"/>
                </div>
            </div>
        )
    }
}

export default Works;