import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from './pages/Main';
import TravelRoute from './pages/Main/TravelRoute'
function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route path="/routes/:place" component={TravelRoute} />
      <Route path="/routes" component={TravelRoute} />
    </Switch>
  );
}

export default App;
