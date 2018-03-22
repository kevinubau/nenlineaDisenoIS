import React, { Component } from 'react';
import Client from './Client';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';

class SetUp extends Component {

    constructor(props) {
        super(props);
        this.state = {tamTablero: '', cantFichasGana: ''};
    
        this.handleChangeTamTablero = this.handleChangeTamTablero.bind(this);
        this.handleChangeCantFichasGana = this.handleChangeCantFichasGana.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChangeTamTablero(event) {
        this.setState({tamTablero: event.target.value});
       
      }

      handleChangeCantFichasGana(event) {
        this.setState({cantFichasGana: event.target.value});
        alert('El tamaño gane es: ' + this.state.cantFichasGana);
       
      }
    
      handleSubmit(event) {
        alert('El tamaño elegido es: ' + this.state.tamTablero);
        alert('El tamaño gane es: ' + this.state.cantFichasGana);
        event.preventDefault();

        ReactDOM.render(
            <Dashboard tam={this.state.tamTablero} cantFichasGana={this.state.cantFichasGana} />,
            document.getElementById('root')
          );
      }
    
      render() {
        return (
            <div className="container">
            <br></br>
            <hr></hr>
            <form onSubmit={this.handleSubmit}>
             
                <div className="form-group row">
                <label>
                Tamaño de tablero:
              </label>
                  <div className="col-xs-3">
                    <input className="form-control" type="number" placeholder="Digite tamaño" required min="1" value={this.state.tamTablero} onChange={this.handleChangeTamTablero} />
                  </div>
             
                  <label>
                Cantidad de fichas para gane:
              </label>
                  <div className="col-xs-3">
                    <input className="form-control" type="number" placeholder="Digite cantidad de fichas en linea para gane" required min="1" value={this.state.cantFichasGana} onChange={this.handleChangeCantFichasGana} />
                  </div>

                  <input className="btn"  type="submit" value="OK" />
              </div>
          </form>
            
            </div>
          
        );
      }
    }
export default SetUp;



