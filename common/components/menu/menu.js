import React from 'react';
import './hamburgers/hamburgers.scss';
import './menu.scss';
import { fallDown as Stack } from 'react-burger-menu'

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
            isActive: "menu-button hamburger--emphatic is-active",
            isCollapsed: "menu-button hamburger--emphatic",
            buttonState: "menu-button hamburger--emphatic",
            menuback: "menu-back"
        }
        this.onClick = this.onClick.bind(this);
        this.style = { outline: "none" }
    }

    onClick() {
        this.setState({ isClicked: !this.state.isClicked });

        if (this.state.isClicked) {
            this.setState({
                buttonState: this.state.isActive,
                menuback: "menu-back-appear"
            });
        } else {
            this.setState({
                buttonState: this.state.isCollapsed,
                menuback: "menu-back"
            });
        }
    }

    render() {
        return (
            <Stack component="div" isOpen={this.state.isClicked}>
                <a id="home" className="bm-item-list" href="/">Home</a>
            </Stack>
        )
    }
}

export default Menu;