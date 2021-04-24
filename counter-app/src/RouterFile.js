import React from 'react';
import App from './App';
import Hello from './Hello';
import Details from './Details';
import Navbar from './Navbar';
import PeopleTab from './PeopleTab';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const RouterFile = () => {
    return <>
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <App />
                </Route>
                <Route path="/home">
                    <Hello />
                </Route>
                <Route path="/details">
                    <Details />
                </Route>
                <Route path="/People">
                    <PeopleTab />
                </Route>
            </Switch>
        </Router>
    </>
}

export default RouterFile;