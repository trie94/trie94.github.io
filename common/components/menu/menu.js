import React from 'react';
import './hamburgers/hamburgers.scss';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isClicked: false,
            isActive: "hamburger--emphatic is-active",
            isCollapsed: "hamburger--emphatic",
            buttonState: "hamburger--emphatic"
        }
        this.onClick = this.onClick.bind(this);
        this.style = { outline: "none" }
    }

    onClick(){
        this.setState({isClicked: !this.state.isClicked});

        if (this.state.isClicked){
            this.setState({buttonState: this.state.isActive});
        } else {
            this.setState({buttonState: this.state.isCollapsed});
        }
    }

    render() {
        return (
            <div className='menu'>
                <div onClick={this.onClick} style={this.style} className={this.state.buttonState} tabIndex="0"
                    aria-label="Menu" role="button" aria-controls="navigation">
                    <div className="hamburger-box">
                        <div className="hamburger-inner"></div>
                    </div>
                </div>
                <nav id="navigation">
                    menu
                </nav>
            </div>
        )
    }
}

export default Menu;