import React, { Component } from 'react';
import Dashboard from './Dashboard';
import './css/waitingForPlayer.css';
import Client from './Client';


class WaitingForPlayer extends Component {

    constructor(props){
        super(props);
        
        this.client = new Client();  

        this.state = {juego:{}, secondsElapsed:0};
             
        this.client.metodoPOST(JSON.stringify(this.props.juego)).then(result => this.setState({juego:result}));  
                
      }

      tick() {
        
        
        this.setState({secondsElapsed: this.state.secondsElapsed + 1});
        var obj = {};

        obj.id = this.state.juego.id;
        obj.descrip = "verificar";
       

        this.client.verificarAceptar(JSON.stringify(obj)).then(result => this.setState({juego:result}));  
       
     }

     componentDidMount() {
       
               
       this.interval = setInterval(this.tick.bind(this), 500);

     }

     componentWillUnmount() {
         
       clearInterval(this.interval);

     }


    

    render() {
       
        
        return (
            <div className="container" align="center">
                {this.state.juego.jugador2?(

                    <Dashboard juego={this.state.juego} usuario={this.props.usuario}/>

                ):(
                
                
                
                <div className="row align-items-center">

                    <div className="col">

                        
                         <label>Esperando por un jugador...</label>
                        <div className="loader"></div>
                        
                    </div>

                    

                    
                </div>
                
                )} 

            </div>

        );
    }




}
export default WaitingForPlayer;
