import React from "react";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Projects from "./Components/Projects";
function App() {
  return (
    <Router>
      <div className="app">
        <div className="container app_container">
          <div className="row app_row">
            <div className="col-lg-3">
          
              <Sidebar/>
            
            </div>
            <div className="col-lg-9 app_main-content">
              {/*navbar*/}
              <Navbar/>
              <Switch>
                <Route exact path="/">
                  <About/>
                </Route>
                <Route path="/resume">
                  <Resume/>
                </Route>
                <Route path="/projects" component={Projects}/>
                <Route>
                  <Redirect to="/"/>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;