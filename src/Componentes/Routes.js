import React from 'react';
import {Route,Switch} from 'react-router-dom';
import App from '../App.js';
import Homepage from './Homepage';
import Signin from './SignIn';
const Routes =()=>
    <App>
        <Switch>
            <Route exact path={"/Homepage.js"} component={Homepage}/>
            <Route exact path={"/Signin.js"} component={Signin}/>
            <Route exact path={"/"} component={Homepage}/>
        </Switch>
    </App>


export default Routes;