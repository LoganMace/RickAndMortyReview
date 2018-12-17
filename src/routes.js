import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Characters from './components/Characters/Characters';
import Favorites from './components/Favorites/Favorites';

export default (
  <Switch>
    <Route exact path={'/'}  component={Characters}/>
    <Route path={'/favorites'}  component={Favorites}/>
  </Switch>
)