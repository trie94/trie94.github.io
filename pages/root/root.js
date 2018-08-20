import './root.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, BrowserRouter, Switch, Route } from 'react-router-dom';

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
    hashType: 'slash'
  });

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log(history.location.pathname);

        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Index} />
                    <Route path='/ar-vr-dev' component={ARVRDev} />
                    <Route path='/web-dev' component={WebDev} />
                </Switch>
            </div>
        )
    }
}

ReactDOM.render(
    <Router history={history}>
        <Root />
    </Router>,
    document.getElementById('root')
);