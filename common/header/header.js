import React from 'react';
import './header.scss';
import { Link } from "react-router-dom";

import logo from '../../assets/imgs/logo.png';
import Menu from '../../common/components/menu/menu';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            link: this.props.link
        };
    }

    render() {
        return (
            <div className='header row'>
                <div className='logo'><img className='logo-img' src={logo}></img></div>
                <div className='title'><Link to={this.state.link}>{this.state.title}</Link></div>
                <Menu />
            </div>
        )
    }
}

export default Header;