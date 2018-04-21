import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WaitingForPlayer from './WaitingForPlayer';
import Client from './Client';
import 'bootstrap/dist/js/bootstrap.js';

class SetUp extends Component {

    constructor(props) {

        super(props);

        this.client = new Client();  
        this.state = {metodo:{}, tamTablero: '', cantFichasGana: '', dificultad:"Elija rival", tipoJuego:"",juego:{}};

        this.handleChangeTamTablero = this.handleChangeTamTablero.bind(this);
        this.handleChangeCantFichasGana = this.handleChangeCantFichasGana.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

      }

      
      signOut() {

        this.googleAuth.signOut();
      }
    
      handleChangeTamTablero(event) {
        this.setState({tamTablero: event.target.value});
       
      }

      handleChangeCantFichasGana(event) {
        this.setState({cantFichasGana: event.target.value});
        
       
      }
    
      handleSubmit(event) {
  
        event.preventDefault();
  
        var obj = {};

        obj.id = "";
        obj.jugador1 = this.props.usuario.name;
        obj.jugador2 = null;
        obj.tam = this.state.tamTablero;
        obj.matriz = null;
        obj.jugadaX = null;
        obj.jugadaY = null;
        obj.gana = null;
        obj.descrip = "crear";
        obj.dificultad = this.state.dificultad;
        obj.tipoJuego = this.state.tipoJuego;
       
          ReactDOM.render(
            <WaitingForPlayer juego={obj} usuario={this.props.usuario}/>,
            document.getElementById('root')
          );
    
        
          
      }

      opcionUser(opcion){
        console.log(opcion);
        
        if(opcion!== "usuario"){
          this.setState({dificultad:opcion, tipoJuego:"PC"});
        }
        else{
          this.setState({dificultad:opcion, tipoJuego:"usuario"});
        }
        
        
        
      }
    
      render() {
        console.log(this.state.dificultad)
        return (
            <div className="container" >
              <br></br>
              <h2>Configuración del juego</h2>
              <hr></hr>
              <form onSubmit={this.handleSubmit}>
              
                  <div className="">
                  <label>
                  Tamaño de tablero:
                </label>
                    <div className="">
                      <input name="tama" className="form-control" type="number" placeholder="Digite tamaño" required min="1" value={this.state.tamTablero} onChange={this.handleChangeTamTablero} />
                    </div>
              
                    <label>
                      Cantidad de fichas para gane:
                  
                    </label>

                    <div className="">
                      <input className="form-control" type="number" placeholder="Digite cantidad de fichas en linea para gane" required min="2" value={this.state.cantFichasGana} onChange={this.handleChangeCantFichasGana} />
                    </div>

                    <br></br>
                  

                  
                  <div className="dropdown">
                      <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{this.state.dificultad}
                      <span className="caret"></span></button>
                      <ul className="dropdown-menu">
                        <li><a onClick={() => this.opcionUser("usuario")}>Usuario</a></li>
                        <li><a onClick={() => this.opcionUser("pcFacil")}>Computadora Fácil</a></li>
                        <li><a onClick={() => this.opcionUser("pcIntermedio")}>Computadora Intermedio</a></li>
                        <li><a onClick={() => this.opcionUser("pcDificil")}>Computadora Difícil</a></li>
                      </ul>
                    </div>
                

              

                    <br></br>
                    <input  className="btn"  type="submit" value="OK" />
                </div>
              </form>
            
            </div>
          
        );
      }
    }
export default SetUp;



