import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Search from './Pages/Search';
const Routes = () => (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
            </Switch>
        </BrowserRouter>

);

export default Routes;