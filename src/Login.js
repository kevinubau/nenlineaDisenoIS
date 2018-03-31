//import ReactDOM from 'react-dom';
import React, { Component } from 'react';
//import Dashboard from './Dashboard';
//import SetUp from './SetUp';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.css';
//import {GoogleLogin} from 'react-google-login';
import GoogleSignIn from "react-google-signin";

class Login extends Component {


    constructor(props) {
        super(props);
        this.state = { usuario:{} };
        
      }

      onSignIn(userProfile, accessToken) {

        this.setState({usuario:userProfile})
        console.log(userProfile)
    }
    
    signOut() {
        this.googleAuth.signOut();
    }

      render() {
        if(this.state.usuario.name != null){


            return <Main usuario={this.state.usuario} />
        }

        return (
            <div  className=''>


            {/*<div id='panel'>
                <div id='titulo'>
                    <h1><span className="label label-default">N en línea</span></h1>
                </div>

                <div>
                    <h3><span className="label">Inicia sesión con tu cuenta de Google para comenzar!</span></h3>
                </div>
                
                <div className="g-signin2" data-onsuccess="onSignIn"></div>


            </div>*/}
            <GoogleSignIn clientId="706263760625-ccdk5mm3h2onughliisgse8480qgn02k"
            			  ref={g => this.googleAuth = g}
            			  onSuccess={this.onSignIn.bind(this)}
            />

                
            <button onClick={this.signOut.bind(this)}> Sign Out </button>  

        </div>
         
          
        );
      }
}

export default Login;
