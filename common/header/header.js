import React from 'react';
import './header.scss';
import { Link } from "react-router-dom";

import logo from '../../assets/imgs/logo.png';
import Menu from '../components/menu/menu';

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
                <div className='logo'><Link to="/">
                    <img className='logo-img' src={logo}></img>
                </Link></div>
                <Menu />
            </div>
        )
    }
}

export default Header;