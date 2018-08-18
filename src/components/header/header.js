import React from 'react';
import './header.scss';
import { Link } from "react-router-dom";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={};
        this.title = "Yein Jo";
    }

    render(){
        return(
            <div className='header title'><Link to="/">{this.title}</Link></div>
        )
    }
}

export default Header;