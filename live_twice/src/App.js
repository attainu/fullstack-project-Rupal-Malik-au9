import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';
import Travelpage from './pages/travelpage';
import Sportspage from './pages/sportspage';
import Foodpage from './pages/foodpage';
import Homepage from './pages/homepage';
import Aboutpage from './pages/aboutpage';
// import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/travel" component={Travelpage} />
          <Route path="/sports" component={Sportspage} />
          <Route path="/food" component={Foodpage} />
          <Route path="/about" component={Aboutpage} />
          <Route exact path="/" component={Homepage} />
        </Switch>
      </Router>
      {/* <Register /> */}
    </div>
  );
}

export default App;

