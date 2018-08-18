import '../css/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/home/home';
import ARVRDev from '../pages/ar-vr-dev/ar-vr-dev';
import WebDev from '../pages/web-dev/web-dev';

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
        this.state = {}
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/ar-vr-dev' component={ARVRDev} />
                    <Route path='/web-dev' component={WebDev} />
                    <Redirect to='/' />
                </Switch>
            </div>
        )
    }
}

ReactDOM.render(
    <BrowserRouter>
    <Root />
    </BrowserRouter>,
    document.getElementById('root')
);