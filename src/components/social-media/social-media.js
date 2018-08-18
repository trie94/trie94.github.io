import React from 'react';
import './social-media.scss';

class Social extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <div className='social-media components row'>
            <div>github</div>
            <div>instagram</div>
            <div>twitter</div>
            <div>gmail</div>
            </div>
        )
    }
}

export default Social;