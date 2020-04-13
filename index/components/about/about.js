import React from 'react';
import './about.scss';
import about_content from './about.json';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.content = about_content.intro.replace("\\n", "\n");
        console.log(this.content);
    }

    render() {
        return (
            <div className='about row' style={this.style}>
            <div className='description'>
                {this.content}
            </div>
            </div >
        )
    }
}

export default About;