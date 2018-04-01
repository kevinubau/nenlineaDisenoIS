import ReactDOM from 'react-dom';
import React, { Component } from 'react';
//import Dashboard from './Dashboard';
import SetUp from './SetUp';
import PartidasDisponibles from './PartidasDisponibles';
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
    divStyle = {
        border: '1px solid',
        
      };
      
    render() {
        const divStyle={
            overflowY: 'scroll'
         
          }
        return (
            
            <div className="container">
                <br/>
                <div className="row ">
                    
                    {console.log(this.props.usuario)}

                    <div className="col-sm-6 col-md-4 ">

                        <table className="table ">
                            <tbody>
                            <tr>
                                <td rowSpan="2"><img src={this.props.usuario.imageUrl} alt={"profile picture of"+this.props.usuario.name}/></td>
                                <td><i><b>Nombre:</b></i> {this.props.usuario.name}  </td>
                         
                            </tr>
                            <tr>
                                <td><i className="glyphicon glyphicon-envelope"><b>E-Mail: </b></i>{this.props.usuario.email}</td>

                            </tr>
                            </tbody>
                         

                        </table>
                        
  

                        <form onSubmit={this.redirectToGameSetUp}>
                            <input className="btn btn-secondary btn-lg" type="submit" value="Iniciar un Juego Nuevo" onClick={this.redirectToGameSetUp} />
                        </form>
                   
                    </div>

                    

                    <div style={divStyle} className="col-sm-6 col-md-8">
                        <PartidasDisponibles/>
                    </div>



                </div>

                
                
            </div>

        );
    }




}
export default Main;
