import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Footer from './containers/Footer';
import WavesContainer from './containers/Main/WavesContainer';
import Main from './pages/Main';
import TravelRoute from './pages/TravelRoute'
import PrimaryCoverFlow from './ui/PrimaryCoverFlow'
function App() {
  return (
    <div>
      <div>
        <div style={{backgroundColor:'rgba(255, 255, 255, 0.6)', minHeight:'77vh'}}>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/routes/:place" component={TravelRoute} />
            <Route path="/routes" component={TravelRoute} />
          </Switch>
        </div>
        <PrimaryCoverFlow/>
        <div style={{display:'block'}}>
          <Footer/>
        </div>
      </div>
    </div> 
  );
}

export default App;
