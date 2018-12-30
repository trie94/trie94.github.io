import React from 'react';
import './about.scss';
import about_content from './about.json';
import landing from './../../../assets/imgs/about/landing.png';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLightOn: true,
            backgroundColor: "transparent"
        };

        this.content = about_content.intro;

        this.style = { backgroundColor: this.state.backgroundColor }
        this.lightHandler = this.lightHandler.bind(this);
    }

    lightHandler() {
        this.setState({ isLightOn: !this.state.isLightOn }, () =>
            this.setState({ backgroundColor: this.state.isLightOn ? "transparent" : "rgb(0,0,0,0.9)" }));
    }

    render() {
        this.style = { backgroundColor: this.state.backgroundColor };
        return (
            <div className='about row' style={this.style}>
                <div className='landing'>
                </div >
            <div className='description'>
                {this.content}
            </div>
            </div >
        )
    }
}

export default About;