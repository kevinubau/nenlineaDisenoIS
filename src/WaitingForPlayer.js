import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
//import { BrowserRouter, Route, Router, Link } from 'react-router-dom'
import './waitingForPlayer.css';


class WaitingForPlayer extends Component {

    

    render() {
        return (
            <div className="container">

                <div className="row align-items-center">

                    <div className="col">

                        
                         <label>Esperando por un jugador...</label>
                        <div className="loader"></div>
                        
                    </div>

                    

                    
                </div>
                

            </div>

        );
    }




}
export default WaitingForPlayer;
