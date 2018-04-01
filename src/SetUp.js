import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
//import GoogleSignIn from "react-google-signin";
import WaitingForPlayer from './WaitingForPlayer';
import axios from 'axios';
import Client from './Client';

class SetUp extends Component {

    constructor(props) {
        super(props);
        this.client = new Client();  
        this.state = {metodo:{}, tamTablero: '', cantFichasGana: ''};

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
        console.log('El tamaño elegido es: ' + this.state.tamTablero);
        //alert('El tamaño gane es: ' + this.state.cantFichasGana);
        event.preventDefault();
        //axios.get('http://localhost:8080/index.html', true)
        //.then(response => console.log(response))
        /*axios.post('http://localhost:8080/nenlineaBackend/nenlineaBackend', {
          firstName: 'Fred',
          lastName: 'Flintstone'
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        public String id;
        public String jugador1;
        public String jugador2;
        public String tam;
        public Ficha[][] matriz;
        public int jugadaX;
        public int jugadaY;
        public int gana;
        */
        var obj = new Object();

        obj.id = "";
        obj.jugador1 = this.props.usuario.name;
        obj.jugador2 = null;
        obj.tam = this.state.tamTablero;
        obj.matriz = null;
        obj.jugadaX = null;
        obj.jugadaY = null;
        obj.gana = null;
        

        var jsonString= JSON.stringify(obj);
        this.client.metodoPOST(jsonString).then(result => this.setState({metodo:result}));  
        ReactDOM.render(
            /*<WaitingForPlayer tam={this.state.tamTablero} cantFichasGana={this.state.cantFichasGana} />,
            document.getElementById('root')*/
            <Dashboard tam={this.state.tamTablero} usuario={this.props.usuario}/>,  document.getElementById('root')
          );
          
      }
    
      render() {
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

                  {/*<div class="form-check">  //para elegir color de ficha (aun no funciona)
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                    <label class="form-check-label" for="exampleRadios1" >
                    <img src="./ficha.png"/>
                      Ficha roja
                    </label>
                  </div>

                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                    <label class="form-check-label" for="exampleRadios1" >
                    <img src="./ficha2.png"/>
                      Ficha amarilla
                    </label>
        </div>*/}


            

                  <br></br>
                  <input  className="btn"  type="submit" value="OK" />
              </div>
            </form>
          
            </div>
          
        );
      }
    }
export default SetUp;



