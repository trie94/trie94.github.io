import React from 'react';

import Header from '../common/header/header';
import About from './components/about/about';
import Work from './components/work/work';
import Blog from './components/blog/blog';
import CV from './components/cv/cv';
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
            <Blog />
            <CV />
            <Social />
            </div>
        )
    }
}

export default Index;