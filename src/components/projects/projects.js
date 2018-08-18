import React from 'react';
import './projects.scss';

class Projects extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <div className='projects components row'>
            <div className='dev1'>
            AR/VR Dev
            </div>
            <div className='dev2'>
            Web Dev
            </div>
            </div>
        )
    }
}

export default Projects;