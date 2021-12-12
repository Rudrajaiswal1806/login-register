import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// css //
import  "../node_modules/bootstrap/dist/css/bootstrap.css";
import  "./App.css";
// Pages //

import Register from "./pages/Register";

import LoginScreen from "./pages/LoginScreen";
import NotFound from "./component/NotFound";
import Product from "./pages/Product";



class App extends React.Component {
  render() {
    return (
      <Router> 
        <div >             
            <Switch>
              <Route exact path='/' component={Register}/>
              <Route  path='/login' component={LoginScreen}/>
              <Route  path='/product' component={Product}/>
              <Route   component={NotFound}/>
            </Switch>        
        </div>
      </Router>
    );
  }
}

export default App;