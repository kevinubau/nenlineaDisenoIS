import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './index.css';
import Dashboard from './Dashboard';
import SetUp from './SetUp';
import 'bootstrap/dist/css/bootstrap.css';
import GoogleSignIn from "react-google-signin";
class Main extends Component {

    constructor(props){
        super(props);
        
   
    }
    signOut() {
        this.googleAuth.signOut();
    }

    redirectToGameSetUp(){
        
        ReactDOM.render(
            <SetUp usuario={this.props.usuario} />,
            document.getElementById('root')
          );
        
    }


    render() {
        return (
            <div>

                <input className="btn btn-secondary btn-lg" type="button" value="Iniciar un Juego Nuevo" onClick={this.redirectToGameSetUp} />
                <button onClick={this.signOut.bind(this)}> Sign Out </button> 
                <div className="col-sm-6" >
                    
                    <h1 className="display-4">Partidas Disponibles:</h1>
                    {console.log(this.props.usuario)}


                    <div className="col-sm-6 col-md-8">
                        <h4>
                            {this.props.usuario.name}</h4>
                      
                        <p>
                            <i className="glyphicon glyphicon-envelope"></i>{this.props.usuario.email}
                            <br />
                            
                            <br />
                            </p>
                   
                        
                    </div>
                    
                

                </div>
            </div>

        );
    }




}
export default Main;
