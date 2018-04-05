import ReactDOM from 'react-dom';

import React, { Component } from 'react';
import Client from './Client';
import Dashboard from './Dashboard';

class PartidasDisponibles extends Component{

    constructor(props){
        super(props);
    
        this.client = new Client();    
        this.state = {juegos:[]};
    
        
        this.client.getJuegos("listaJuegos").then(result => this.setState({juegos:result}));    
        console.log("constructor partidas disponibles...");
        
      }

    handleAccept(game){
        console.log("id "+game)
        ReactDOM.render(
            //<WaitingForPlayer tam={this.state.tamTablero} cantFichasGana={this.state.cantFichasGana} />,
            //document.getElementById('root')
            <Dashboard tam={game.tam} usuario={this.props.usuario}/>,  document.getElementById('root')
          );
    }



    render(){

        return(
            <div>

                <div>
                    <h4><kbd>Partidas Disponibles:</kbd></h4>
                </div>
       
                <div className="container">

                    {this.state.juegos.map((juego, index)=> (

                        <div key={juego.id} className="box">
                            <span className="badge">Tamaño: {juego.tam}</span><span className="badge">Jugador: {juego.jugador1}</span><br/>
                            <button onClick={() => this.handleAccept(juego)} key={index} id={juego.id} className="btn" >Aceptar</button>
                            <hr></hr>
                        </div>
                         
                    ))}

                </div>
                    

                
                </div>
        )
    }

}
export default PartidasDisponibles;