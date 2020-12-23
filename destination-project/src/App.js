import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AriaSelectBox from './components/AriaSelectBox';
import Footer from './containers/Footer';
import WavesContainer from './containers/Main/WavesContainer';
import Main from './pages/Main';
import TravelRoute from './pages/TravelRoute'

function App() {
  return (
    <div>
      <div>
        <AriaSelectBox /> 
        <div style={{backgroundColor:'rgba(255, 255, 255, 0.6)', minHeight:'77vh'}}>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/routes/:place" component={TravelRoute} />
            <Route path="/routes" component={TravelRoute} />
          </Switch>
        </div>
     
        <div style={{display:'block'}}>
          <Footer/>
        </div>
      </div>
      <div style={{position:'fixed', bottom: 0, width:'100%', opacity: 0.5, zIndex: -999}}>
        <WavesContainer />
      </div>  
    </div> 
  );
}

export default App;
