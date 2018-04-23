import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Client from './Client';
import Dashboard from './Dashboard';

class PartidasPausadas extends Component{

    constructor(props){
        super(props);
        
        this.client = new Client();    
        this.state = {juegos:[], game: "", juego:{}};  
        var obj = {};
        obj.descrip = "juegosPausados";
        obj.jugador1 = this.props.usuario.name;
        this.client.getJuegos(JSON.stringify(obj)).then(result => this.setState({juegos:result}));    

      }

      tick() {
        this.client.getJuegos(JSON.stringify(this.obj)).then(result => this.setState({juegos:result}));  
     }

    componentDidMount() {
       
    
       //this.interval = setInterval(this.tick.bind(this), 2000);
     }

     componentWillUnmount() {
         
       clearInterval(this.interval);
     }

    handleAccept(game){

        var obj = {};

        obj.id = game;
        obj.descrip = "reanudar";
        obj.jugador1 = this.props.usuario.name;

        this.client.acceptGame(JSON.stringify(obj)).then(result => this.setState({juego:result}));  
        
        
        
    }

    

    render(){
        if(this.state.juego.matriz){
            ReactDOM.render(

                <Dashboard juego={this.state.juego} usuario={this.props.usuario}/>,  document.getElementById('root')
              );
        }

        return(
            <div className='container'>

                <div>
                    <h4><kbd>Partidas Pausadas:</kbd></h4>
                </div>
       
                
                {this.state.juegos.length>0? (

                    this.state.juegos.map((juego, index)=> (

                        <div key={juego.id} className="box">
                            <span className="badge">Tamaño: {juego.tam}</span><span className="badge">Jugador: {juego.jugador1}</span><br/>
                            <button onClick={() => this.handleAccept(juego.id)} key={index} id={juego.id} className="btn" >Reanudar</button>
                            <hr></hr>
                        </div>
                        
                    ))


                    ) : (

                        <div>
                            <p>NO HAY PARTIDAS PAUSADAS</p>
                            
                        </div>
                    )}
                    

                
                </div>
        )
    }

}
export default PartidasPausadas;