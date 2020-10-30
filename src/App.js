import React from 'react';
import SVG from './Logo';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './Home';
import Experiences from './Experiences';


function App() {
  
  
  return (
    
    <div className="wrap">
      <Router>
        <header>
          <div className="container">
              <div className="logo">
                  <a href="#">
                      <SVG name="logo" height="32" width="102" color="#ffffff" />
                  </a>
              </div>
              <div className="menu">
                <ul>
                    <li><Link to="/" className="active">숙소</Link></li>
                    <li><Link to="/experiences">체험</Link></li>
                    <li><Link to="/">온라인 체험</Link></li>
                </ul>
              </div>
              <div className="ect_menu"></div> 
          </div>   
        </header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/experiences' component={Experiences} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
