import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import RoutePage from './pages/RoutePage'
function App() {
  return (
    <div>
      <div>
        <div style={{backgroundColor:'rgba(255, 255, 255, 0.6)', minHeight:'77vh'}}>
          <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route path="/routes/:place" component={RoutePage} />
            <Route exact path="/routes" component={MainPage} />
          </Switch>
        </div>
        <div style={{display:'block'}}>
          <Footer/>
        </div>
      </div>
    </div> 
  );
}

export default App;
