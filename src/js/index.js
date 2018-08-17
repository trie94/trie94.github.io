import '../css/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../components/header/header';
import About from '../components/about/about';
import Projects from '../components/projects/projects';
import Blog from '../components/blog/blog';
import CV from '../components/cv/cv';
import Social from '../components/social-media/social-media';


if (process.env.NODE_ENV !== 'production') { console.log("dev mode"); }

if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => {
        const oldRootElem = document.querySelector('body');
        const newRootElem = oldRootElem.cloneNode(false);
        oldRootElem.parentNode.insertBefore(newRootElem, oldRootElem);
        oldRootElem.parentNode.removeChild(oldRootElem);
    });
} else {
    enableProdMode();
}

class Root extends React.Component{
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

ReactDOM.render(
    <Root />,
    document.getElementById('root')
);