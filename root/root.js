import './root.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Index from '../index';
import Works from '../pages/works';
import Brick from '../pages/brick';
import Arpet from '../pages/arpet';
import Tilt from '../pages/tilt';
import Represent from '../pages/re-present';
import PastWork from '../pages/past-work';

import BrickDevBlog from '../pages/brick-dev-blog';

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

String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        window.scrollTo(0, 0);

        return (
            <Switch>
                <Route exact path='/' component={Index} />
                <Route path ='/works' component={Works} />
                <Route path='/brick/dev-blog' component={BrickDevBlog} />
                <Route path='/brick' component={Brick} />
                <Route path='/arpet' component={Arpet} />
                <Route path='/tilt' component={Tilt} />
                <Route path='/re-present' component={Represent} />
                <Route path='/past-work' component={PastWork} />
                <Redirect to='/' />
            </Switch>
        )
    }
}

ReactDOM.render(
    <BrowserRouter>
    <Root />
    </BrowserRouter>,
    document.getElementById('root')
);
