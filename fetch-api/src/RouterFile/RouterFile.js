import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FunctionalAPI from './../ApiFiles/FunctionalAPI';
import ClassLevelAPI from './../ApiFiles/ClassLevelAPI';
import App from './../App';
import Navbar from './NavBar';

const RouterFile = () => {
    return <>
        <Navbar />
        <Switch>
            {/* <Route exact path="/">
                <App />
            </Route> */}
            <Route path="/functionalAPI">
                <FunctionalAPI />
            </Route>
            <Route exact path="/classLevelAPI">
                <ClassLevelAPI />
            </Route>
        </Switch>
    </>;

}

export default RouterFile;

