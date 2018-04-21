import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Client from './Client';
import Dashboard from './Dashboard';

class PartidasDisponibles extends Component{

    constructor(props){
        super(props);
        
        this.client = new Client();    
        this.state = {juegos:[], game: "", juego:{}};
            
        
        this.client.getJuegos("listaJuegos").then(result => this.setState({juegos:result}));    
        console.log("constructor partidas disponibles...");
        
        
      }

      tick() {
        this.client.getJuegos("listaJuegos").then(result => this.setState({juegos:result}));  
     }

     componentDidMount() {
       
    
       this.interval = setInterval(this.tick.bind(this), 2000);
     }

     componentWillUnmount() {
         
       clearInterval(this.interval);
     }

    handleAccept(game){

        var obj = {};

        obj.id = game;
        obj.descrip = "aceptar";
        obj.jugador2 = this.props.usuario.name;

        this.client.acceptGame(JSON.stringify(obj)).then(result => this.setState({juego:result}));  
        
        if(this.state.juego.matriz){

            
        }
        
    }

    goToDash(obj){

        this.client.acceptGame(JSON.stringify(obj)).then(result => this.setState({juego:result}));  
        ReactDOM.render(

            <Dashboard juego={this.state.juego} usuario={this.props.usuario}/>,  document.getElementById('root')
          );
    }

    render(){
        if(this.state.juego.matriz){
            ReactDOM.render(

                <Dashboard juego={this.state.juego} usuario={this.props.usuario}/>,  document.getElementById('root')
              );
        }

        return(
            <div>

                <div>
                    <h4><kbd>Partidas Disponibles:</kbd></h4>
                </div>
       
                {console.log("JUEGOS: "+this.state.juegos)}
                {this.state.juegos.length>0? (

                    this.state.juegos.map((juego, index)=> (

                        <div key={juego.id} className="box">
                            <span className="badge">Tamaño: {juego.tam}</span><span className="badge">Jugador: {juego.jugador1}</span><br/>
                            <button onClick={() => this.handleAccept(juego.id)} key={index} id={juego.id} className="btn" >Aceptar</button>
                            <hr></hr>
                        </div>
                        
                    ))


                    ) : (

                        <div>
                            <p>NO HAY PARTIDAS DISPONIBLES</p>
                            
                        </div>
                    )}
                    

                
                </div>
        )
    }

}
export default PartidasDisponibles;