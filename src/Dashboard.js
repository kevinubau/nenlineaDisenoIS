import React, { Component } from 'react';
import Client from './Client';
import 'bootstrap/dist/css/bootstrap.css';
import Chat from './Chat';

class Dashboard extends Component {

  constructor(props){
    super(props);

    this.state = {juego:{}}
    this.client = new Client();
 
  }
  tick() {
    
    
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
    //consultar server por nuevos mensajes
    var obj = {};
    obj.id = this.state.juego.id;
    obj.descrip = "actualizar";
    obj.dificultad = this.props.juego.dificultad;
    this.client.verificarAceptar(JSON.stringify(obj)).then(result => this.setState({juego:result})); 
    
 }


 componentWillUnmount() {

   clearInterval(this.interval);

 }
  componentDidMount() {

    this.setState({juego: this.props.juego});
    this.interval = setInterval(this.tick.bind(this), 250);
  }

  pintarGane(){
    
    if (this.state.juego.gana===1){
      console.log("Gana fichas rojas")
      alert("Ganó el jugador con fichas rojas!");
     
    }

    else if(this.state.juego.gana===2){
      console.log("Gana fichas amarillas")
      alert("Ganó el jugador con fichas amarillas!");
    }

  }

  signOut() {
    this.googleAuth.signOut();
  }

  casilla(i, j){

    //console.log(typeof(this.state.juego.jugador1));
    //console.log(typeof(this.state.juego.jugador2));
    //console.log(typeof(this.props.usuario.name));
    //console.log(typeof(this.state.juego.turno));
    var obj = {};
    if(this.state.juego.jugador1 === this.props.usuario.name && this.state.juego.turno === 1){
      //console.log("TURNO JUGADOR 1");

      obj = this.state.juego;
      obj.jugadaX = i;
      obj.jugadaY = j;
      
      this.setState({juego:obj})
 
      this.client.validarPOST(this.state.juego).then(result => this.setState({juego:result})); 
    }
    
    else if(this.state.juego.jugador2 === this.props.usuario.name && this.state.juego.turno === 2){
      //console.log("TURNO JUGADOR 2"); 
        
      obj = this.state.juego;
      obj.jugadaX = i;
      obj.jugadaY = j;
      
      this.setState({juego:obj})
    
      this.client.validarPOST(this.state.juego).then(result => this.setState({juego:result}));

    }
   
    
      
    
  }


  setImageNinLine(wich){ 
    
    if(wich===0){

      return "./casilla.png";
    }

    else if(wich===1){

      return "./ficha.png";
    }

    else if(wich === 2){

      return "./ficha2.png";
    }

    else if(wich === 3){
      
      return "./ficha1winner.png";
    }
    else if(wich === 4){
      
      return "./ficha2winner.png";
    }
    

  }

  pausarJuego(juegoID){
    var obj = {};
    obj.id = juegoID
    obj.descrip = "guardar";
    this.client.validarPOST(obj);


  }

  render() {

      
      if(this.state.juego.matriz !== undefined){

        const style = {
       
          margin: 0,
          padding: 0,
          borderCollapse: "collapse"
          
        };
        const divStyle={
          overflowY: 'scroll',
          overflowX: 'scroll'
        }

        return (

          <div className="container-fluid">

            <div className="row">
              <div className="col-sm-12 col-md-12" >

                <br/>
                {this.state.juego.jugador2==="PCC"?(
                  <input onClick={() => this.pausarJuego(this.state.juego.id)} type='button' disabled className='btn' value='Pausar'/>
                ):(
                  <input onClick={() => this.pausarJuego(this.state.juego.id)} type='button' className='btn' value='Pausar'/>

                )
                }
                <h4><kbd>Fichas para ganar: {this.state.juego.cantFichasParaGanar}</kbd></h4>
                <hr/>
              </div>
            </div>
            <div className="row">
            
              <div className="col-sm-8 col-md-8" style={divStyle}>

                <h1>N en línea</h1>

                <table style={style}>

                  <tbody>

                    {this.state.juego.matriz.map((listaFicha, index) => (
                    <tr key={index}>
                      
                        {listaFicha.map((ficha, ind)=> (

                        <td style={style} key={index+ind+ficha} onClick={() => this.casilla(index, ind)}> <img src={this.setImageNinLine(ficha.status)} key={index+ind+ficha}  alt={ficha.status}/> </td>

                      ))}
                    
                    
                  
                    </tr>
                  ))}

                  
                </tbody>


                </table>

              </div>
                  
              <div className="col-sm-4 col-md-4">
                  <Chat usuario={this.props.usuario} juego={this.state.juego} />
                

              </div>
              

           </div>

              {this.pintarGane()}
          </div>
    
        );
      }


      return (

        <div className="" align="center">

           <div className="Container">
            
             <img src="./loading2.gif" alt="loading"/>

           </div>

        </div>
  
      );
      
  
    
  }

}

export default Dashboard;



