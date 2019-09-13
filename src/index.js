import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Increment from './Increment/Increment';
import Users from './Users/Users';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
    (
        <BrowserRouter>
            <Switch>
                <Route path="/increment" component={Increment} />
                <Route path="/users" component={Users} />
            </Switch>
        </BrowserRouter>
    ), document.getElementById('root'));
