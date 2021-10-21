import './App.css';
import './toggle.css';
import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Sidebar from './layout/Sidebar'
import {connect} from "react-redux";
import Main from "./Main";
class App extends React.Component{

  render(){
    return (
      <BrowserRouter>
          <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css"/>
          <link
              href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
              rel="stylesheet"/>
          <link href="css/sb-admin-2.min.css" rel="stylesheet"/>
          <div id="wrapper">

            <Sidebar/>
            <Main/>

          </div>
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>
          <script src="vendor/jquery/jquery.min.js"></script>
          <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
          <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
          <script src="js/sb-admin-2.min.js"></script>
          <script src="vendor/chart.js/Chart.min.js"></script>
          <script src="js/demo/chart-area-demo.js"></script>
          <script src="js/demo/chart-pie-demo.js"></script>
        </BrowserRouter>
    );
  }
}

export  default  App;
