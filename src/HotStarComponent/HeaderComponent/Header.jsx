import React, { Component, Fragment } from 'react'
import './HeaderStyles.css'
import {Link} from "react-router-dom";

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Fragment>
                 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                     <span style={{padding:"0 16px"}} className="bar-icon"> <i className="fas fa-bars"></i></span>
        <a className="navbar-brand" href="#">
            <img src="disney-hotstar-logo-dark.svg" alt=""/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">TV </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Movies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Sports</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Premium</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disney-block" href="/" >
                  <div>Diseny+</div>
              <div>New</div>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link kids-block" href="/">Kids</a>
            </li>
          </ul>
         

         <ul className="navbar-nav ml-auto">
             <li className="nav-item">
                 <input type="text"
                 className="form-control"
                 placeholder="search"/>
             </li>
             <span style={{position:"relative"}}><i className="fas fa-seacrh" style={{position:"absulate"}}/></span>
             <li classNam="nav-item">
             <a className="nav-link subscribe-block " href="/">Subscribe</a>
             </li>
             <li className="nav-item">
              <Link className="nav-link text-uppercase" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase" to="/register">Register</Link>
            </li>
         </ul>
        </div>
      </nav>
            </Fragment>
          );
    }
}
 
export default HeaderComponent;