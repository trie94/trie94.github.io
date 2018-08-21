import './root.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, HashRouter, BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Index from '../index/index';
import ARVRDev from '../ar-vr-dev/ar-vr-dev';
import WebDev from '../web-dev/web-dev';
import { createHashHistory } from 'history'

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

const history = createHashHistory({
    basname: '',
    hashType: 'noslash'
  });

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Switch>
                <Route exact path='/' component={Index} />
                <Route path='/ar-vr-dev' component={ARVRDev} />
                <Route path='/web-dev' component={WebDev} />
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