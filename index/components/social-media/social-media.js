import React from 'react';
import './social-media.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

class Social extends React.Component{
    constructor(props){
        super(props);
        this.state={ isClicked: false};
    }

    render(){
        return(
            <div className='social-media row'>
            <Icon icon={faGithubAlt} link="https://github.com/trie94"/>
            <Icon icon={faInstagram} link="https://www.instagram.com/crushed157/" />
            <Icon icon={faTwitter} link="https://twitter.com/157crush"/>
            <Icon icon={faEnvelope} link="mailto:yeinj@andrew.cmu.edu"/>
            </div>
        )
    }
}

class Icon extends React.Component{
    constructor(props){
        super(props);
        this.state={ isHovering: false };
        this.doSpin = this.doSpin.bind(this);
        this.stopSpin = this.stopSpin.bind(this);
        this.style = { color: "#000" }
    }
    doSpin(){
        this.setState({isHovering:true});
    }

    stopSpin(){
        this.setState({isHovering:false});
    }

    render() {
        return (
            <a href={this.props.link} target="_blank" style={this.style}>
            <div className='icons'><FontAwesomeIcon icon={this.props.icon} size="2x"
            onMouseEnter={this.doSpin} onMouseLeave={this.stopSpin}
            spin= {this.state.isHovering}/></div>
            </a>
        );
    }
}

export default Social;