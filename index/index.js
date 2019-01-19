import React from 'react';

import Header from '../common/header/header';
import About from './components/about/about';
import Work from './components/work/work';
import Stuff from './components/stuff/stuff';
import Social from './components/social-media/social-media';

class Index extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <div className="index">
            <Header title="Yein Jo" link="/"/>
            <About />
            <Work />
            <Stuff />
            <Social />
            </div>
        )
    }
}

export default Index;