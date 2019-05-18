import React from 'react';
import {Switch, Route} from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe  from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import Portfoliov1 from './portfoliov1';
import Portfoliov2 from './portfoliov2';
import Doggo from './doggo';
import Apigamesite from './apigamesite';
import Breakatniki from './breakatniki';
import Thatshot from './thatshot';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/aboutme" component={AboutMe}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/portfoliov1" component={Portfoliov1}/>
        <Route path="/portfoliov2" component={Portfoliov2}/>
        <Route path="/doggo" component={Doggo}/>
        <Route path="/apigamesite" component={Apigamesite}/>
        <Route path="/breakatniki" component={Breakatniki}/>
        <Route path="/thatshot" component={Thatshot}/>
    </Switch>
)

export default Main