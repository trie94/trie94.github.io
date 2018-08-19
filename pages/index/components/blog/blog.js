import React from 'react';
import './blog.scss';

class Blog extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <div className='blog components row'>
            <div className='blog1'>
            Coding Sketches
            </div>
            <div className='blog2'>
            UX Design
            </div>
            <div className='blog3'>
            Drawings
            </div>
            </div>
        )
    }
}

export default Blog;