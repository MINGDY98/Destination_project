import React from 'react';
import {Route} from 'react-router-dom';
import Main from './pages/Main';
function App() {
  return (
    <div>
      <Route path="/" component={Main} exact/>
    </div>
  );
}

export default App;
