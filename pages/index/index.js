import React from 'react';

import Header from './components/header/header';
import About from './components/about/about';
import Projects from './components/projects/projects';
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
            <div id="app">
            <Header />
            <About />
            <Projects />
            <Blog />
            <CV />
            <Social />
            </div>
        )
    }
}

export default Index;