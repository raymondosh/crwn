import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import './App.css';

const hatsPage = () => (
  <div>
    <h1>hello</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={hatsPage} />
      </Switch>
    </div>
  );
}

export default App;
