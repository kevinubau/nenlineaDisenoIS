import React, { Component } from 'react';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.css';
import GoogleSignIn from "react-google-signin";
import "./css/Login.css";

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
            <div  className="container" align="center" >
                <hr/>
                <h1 className="text-uppercase mb-0">N en Línea</h1>
                <hr/>
                <GoogleSignIn clientId="706263760625-ccdk5mm3h2onughliisgse8480qgn02k"
                            ref={g => this.googleAuth = g}
                            onSuccess={this.onSignIn.bind(this)}
                />
                <br/>
                <p className="font-weight-light">Inicia sesión con tu cuenta de google!</p>
                    
                {/*<button onClick={this.signOut.bind(this)}> Sign Out </button>*/}

            </div>
         
          
        );
      }
}

export default Login;
