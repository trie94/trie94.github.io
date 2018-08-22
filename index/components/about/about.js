import React from 'react';
import './about.scss';
import about_content from './about.json';

import door from '../../../assets/imgs/door.png';
import light from '../../../assets/imgs/light-switch.png';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLightOn: true,
            backgroundColor: "rgb(1,1,1,0.0)" };

        this.content = about_content.intro;

        this.style = { backgroundColor: this.state.backgroundColor }
        this.lightHandler = this.lightHandler.bind(this);
    }

    lightHandler(){
        this.setState({ isLightOn: !this.state.isLightOn }, ()=>
            this.setState({ backgroundColor: this.state.isLightOn ? "#fff" : "rgb(0,0,0,0.9)" }));
    }

    render() {
        this.style = { backgroundColor: this.state.backgroundColor };
        return (
            <div className='about row' style={this.style}>
                <div className='interaction'>
                    <img className="switch-img" src={light} onClick={this.lightHandler}/>
                    <img className="door-img" src={door}/>
                </div>
                <div className='description'>
                    {this.content}
                </div>
            </div>
        )
    }
}

export default About;