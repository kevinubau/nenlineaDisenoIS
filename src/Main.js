import ReactDOM from 'react-dom';
import React, { Component } from 'react';
//import Dashboard from './Dashboard';
import SetUp from './SetUp';
import PartidasDisponibles from './PartidasDisponibles';
import 'bootstrap/dist/css/bootstrap.css';
//import GoogleSignIn from "react-google-signin";
//import { BrowserRouter, Route, Router, Link } from 'react-router-dom'

class Main extends Component {

    constructor(props){
        super(props);
        
        this.redirectToGameSetUp = this.redirectToGameSetUp.bind(this);
    }
    signOut() {
        this.googleAuth.signOut();
    }

    redirectToGameSetUp(event){
        event.preventDefault();
        ReactDOM.render(
            <SetUp usuario={this.props.usuario} />,
            document.getElementById('root')
        )
        
        
    }


    render() {
        return (
            <div>
                
                <div className="col-sm-6" >
                    
                    {console.log(this.props.usuario)}

                    <div>
                        <img src={this.props.usuario.imageUrl} alt={"profile picture of"+this.props.usuario.name}/>
                    </div>
                    <div className="col-sm-6 col-md-8">
                        <b>Nombre:</b> {this.props.usuario.name}
                      
                        <p>
                            <i className="glyphicon glyphicon-envelope"><b>E-Mail: </b></i>{this.props.usuario.email}
                            <br />

                            <br />
                        </p>
                   
                        
                    </div>
                    
                

                </div>

                <div>
                    <form onSubmit={this.redirectToGameSetUp}>
                        <input className="btn btn-secondary btn-lg" type="submit" value="Iniciar un Juego Nuevo" onClick={this.redirectToGameSetUp} />
                    </form>
                </div>

                <div>
                    <PartidasDisponibles/>
                </div>
                
            </div>

        );
    }




}
export default Main;
