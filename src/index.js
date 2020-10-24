import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import "./HotStarComponent/hotstar.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery';
import 'popper.js/dist/popper';
import 'bootstrap/dist/js/bootstrap'


import App from "./HotStarComponent/App";
ReactDOM.render(<Router>
    <App/>
</Router>,
document.querySelector("#root")
);