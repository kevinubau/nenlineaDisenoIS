import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './index.css';
import Dashboard from './Dashboard';
import SetUp from './SetUp';
import 'bootstrap/dist/css/bootstrap.css';
import GoogleSignIn from "react-google-signin";
import { BrowserRouter, Route, Router, Link } from 'react-router-dom'

class WaitingForPlayer extends Component {

    constructor(props){
        super(props);
        
       
    }
  


    render() {
        return (
            <div>
                <h4>Esperando por jugador</h4>
            </div>

        );
    }




}
export default WaitingForPlayer;
