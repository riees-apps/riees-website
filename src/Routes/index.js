import React from "react";
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import About from '../About/index.js'
import Cities from '../Cities/index.js'
import City from '../Cities/city.js'
import Es from '../Es/index.js'
import Coming from '../Es/coming.js'
import Living from '../Es/living.js'
import Home from "../Home/index.js";
import Institutes from "../Institutes/index.js";
import Institute from '../Institutes/institute.js'
import Admin from "../Admin/index.js";
import Header from '../components/Header/index.js'

const Routes = () => (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/Admin" component={Admin}/>
            <Route path="/Cities" component={Cities}/>
            <Route path="/City" component={City}/>
            <Route path="/Es" component={Es}/>
            <Route path="/Coming" component={Coming}/>
            <Route path="/Living" component={Living}/>
            <Route path="/Institutes" component={Institutes}/>
            <Route path="/Institute" component={Institute}/>
            <Route path="/Admin" component={Admin}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;