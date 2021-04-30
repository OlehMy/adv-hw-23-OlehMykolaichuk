import {Route, Switch} from 'react-router-dom';
import React from 'react';

import HomePage from '../pages/home/Home';
import Inputs from '../pages/posts/Inputs';
import Posts from '../pages/posts/Posts'

const Contents = () => {    
    
    return ( 
        <main className = "main">
            <Switch>
                <Route path = '/adv-hw-23-OlehMykolaichuk/' exact component = {HomePage}/>
                <Route path = '/adv-hw-23-OlehMykolaichuk/posts'>
                    <Inputs/>
                    <Posts/>
                </Route>
                <Route path = '*'>
                    <p className = "error flex">404: page not found</p>
                </Route>
            </Switch>
        </main>
    );
}
 
export default Contents;