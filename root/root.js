import './root.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, HashRouter, BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import { browserHistory, Router, Route, IndexRedirect } from 'react-router';

import Index from '../index';
import ARVRDev from '../pages/ar-vr-dev';
import WebDev from '../pages/web-dev';
import { createHashHistory } from 'history';

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

// const history = createHashHistory({
//     basname: '',
//     hashType: 'noslash'
// });

function scrollTop() {
    window.scrollTo(0, 0)
}

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            // <Router history={browserHistory} onUpdate={scrollTop}>
            //     <Route path="/" component={Index} />
            //     <Route path='/ar-vr-dev' component={ARVRDev} />
            //     <Route path='/web-dev' component={WebDev} />
            // </Router>
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