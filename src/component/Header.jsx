import React from "react";
import {NavLink} from "react-router-dom";

class Header extends React.Component {
    
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-info sticky-top">
            <div className="container ">
            <img src="./ricon.png" className="bg-white rounded-circle" alt="" width="40"/>
              
              <div className="collapse navbar-collapse justify-content-end " >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link " exact to="/">Register</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" exact to="/login">Login</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" exact to="/product">Home</NavLink>
                  </li>
                  
                </ul>
              </div>
            </div>
          </nav>
        );
      }
}
export default Header;