import React from 'react';
import resume from '../../../assets/pdfs/resume.pdf';
import './menu.scss';

class MenuButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovering: false,
            isClicked: false,
        };
    }
}

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="menu-list">
                <div className="menu-item"><a href="/">HOME</a></div>
                <div className="menu-item"><a href="/works">WORK</a></div>
                <div className="menu-item"><a href="https://trie94.github.io/sketchbook" target="_blank">SKETCHBOOK</a></div>
                <div className="menu-item"><a href={resume} target="_blank">CV</a></div>
            </div>
        )
    }
}

export default Menu;