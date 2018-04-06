import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
//import { BrowserRouter, Route, Router, Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import './waitingForPlayer.css';
import Client from './Client';


class WaitingForPlayer extends Component {

    constructor(props){
        super(props);
    
        this.client = new Client();  

        this.state = {juego:{}, secondsElapsed:0};

        this.client.metodoPOST(JSON.stringify(this.props.juego)).then(result => this.setState({juego:result}));  
        
        
      }

      tick() {
        console.log("xxx");
        
        this.setState({secondsElapsed: this.state.secondsElapsed + 1});
        var obj = new Object();

        obj.id = this.state.juego.id;
        obj.descrip = "verificar";
       

        this.client.verificarAceptar(JSON.stringify(obj)).then(result => this.setState({juego:result}));  
        console.log(JSON.stringify(this.state))
     }

     componentDidMount() {
       
       console.log(JSON.stringify(this.state))

       this.interval = setInterval(this.tick.bind(this), 250);
     }

     componentWillUnmount() {
       clearInterval(this.interval);
     }


    

    render() {
        if(this.state.juego.jugador2){
            console.log("PROPS WAITINGFORPLAYERS: "+JSON.stringify(this.state.juego.jugador2));
            ReactDOM.render(
               
                <Dashboard juego={this.state.juego} usuario={this.props.usuario}/>,  document.getElementById('root')
              );

        }
        
        return (
            <div className="container" align="center">

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
