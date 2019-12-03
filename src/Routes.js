import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './views/home/Home';
import Dao from './views/dao/Dao';
import Summon from './views/summon/Summon';
import Apply from './views/apply/Apply';
import Profile from './views/profile/Profile';
import Stats from './views/stats/Stats';
import Building from './views/building/Building';
import FourOhFour from './views/fourOhFour/FourOhFour';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route
      path="/dao/:contractAddress(\b0x[0-9a-f]{10,40}\b)"
      exact
      component={Dao}
    />
    <Route
      path="/apply/:contractAddress(\b0x[0-9a-f]{10,40}\b)"
      exact
      component={Apply}
    />
    <Route path="/summon" exact component={Summon} />
    <Route
      path="/profile/:account(\b0x[0-9a-f]{10,40}\b)"
      exact
      component={Profile}
    />
    <Route path="/stats" exact component={Stats} />
    <Route
      path="/building-dao/:contractAddress(\b0x[0-9a-f]{10,40}\b)"
      exact
      component={Building}
    />
    <Route path="*" component={FourOhFour} />
  </Switch>
);

export default Routes;
