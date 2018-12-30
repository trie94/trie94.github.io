import './root.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Index from '../index';
import Works from '../pages/works';
import Brick from '../pages/brick';
import Tilt from '../pages/tilt';
import Represent from '../pages/re-present';

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
                <Route path='/brick' component={Brick} />
                <Route path='/tilt' component={Tilt} />
                <Route path='/re-present' component={Represent} />
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