import React, { Component } from 'react';
import Client from './Client';


class PartidasDisponibles extends Component{

    constructor(props){
        super(props);
    
        this.client = new Client();    
        this.state = {juegos:[]};
    
        
        this.client.getJuegos("listaJuegos").then(result => this.setState({juegos:result}));    
        console.log("constructor partidas disponibles...");
        
      }


    render(){

        return(
            <div>

                <div>
                    <h4><kbd>Partidas Disponibles:</kbd></h4>
                </div>
       
                <div className="container">

                    {this.state.juegos.map((juego, index)=> (

                        <div key={index*2} className="box">
                            <span className="badge">Tamaño: {juego.tam}</span><span className="badge">Jugador: {juego.jugador1}</span><br/>
                            <button key={index} id={juego.id} className="btn">Aceptar</button>
                            <hr></hr>
                        </div>
                         
                    ))}

                </div>
                    

                
                </div>
        )
    }

}
export default PartidasDisponibles;