import React from 'react';
import './header.scss';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={};
        this.title = "Yein Jo";
    }

    render(){
        return(
            <div className='header title'>{this.title}</div>
        )
    }
}

export default Header;