import React, { Component } from 'react';
import Client from './Client';
import 'bootstrap/dist/css/bootstrap.css';
import Chat from './Chat';

class Dashboard extends Component {

  constructor(props){
    super(props);

    this.state = {juego:{}}
    this.client = new Client();
   

    console.log("PROPS DASHBOARD: "+JSON.stringify(this.props.juego));
    console.log("STATE DASHBOARD: "+JSON.stringify(this.state.juego));
    
  }
  tick() {
    console.log("xxx");
    
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
    //consultar server por nuevos mensajes
    var obj = {};
    obj.id = this.state.juego.id;
    obj.descrip = "actualizar";
    this.client.verificarAceptar(JSON.stringify(obj)).then(result => this.setState({juego:result})); 
    
 }


 componentWillUnmount() {

   clearInterval(this.interval);

 }
  componentDidMount() {

    this.setState({juego: this.props.juego});
    console.log("chat dash "+JSON.stringify(this.state.juego.chat))
    //this.interval = setInterval(this.tick.bind(this), 250);
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

    var obj = this.state.juego;
    obj.jugadaX = i;
    obj.jugadaY = j;
    this.setState({juego:obj})
    //this.state.metodo.jugadaX = i;
    //this.state.metodo.jugadaY = j;
    this.client.validarPOST(this.state.juego).then(result => this.setState({juego:result}));    
    
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

  render() {

      
      if(this.state.juego.matriz !== undefined){
        console.log("STATE DASHBOARD render: "+JSON.stringify(this.state));

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

          <div className="container">
                     
            <div className="row">
              <div className="col-sm-8 col-md-8" style={divStyle}>
                <h1>Dashboard</h1>

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



