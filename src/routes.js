import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Characters from './components/Characters/Characters';
import Favorites from './components/Favorites/Favorites';
import SingleChar from './components/SingleChar/SingleChar';

export default (
  <Switch>
    <Route exact path={'/'}  component={Characters}/>
    <Route path={'/favorites'}  component={Favorites}/>
    <Route path={'/char/:id'}  component={SingleChar}/>
  </Switch>
)