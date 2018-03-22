import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './index.css';
import Dashboard from './Dashboard';
import SetUp from './SetUp';
import 'bootstrap/dist/css/bootstrap.css';
import {GoogleLogin} from 'react-google-login';


class Login extends Component {


    constructor(props) {
        super(props);
        
      }

      render() {

        return (
            <div id='mainLoginDiv' className=''>


            <div id='panel'>
                <div id='titulo'>
                    <h1><span className="label label-default">N en línea</span></h1>
                </div>

                <div>
                    <h3><span className="label">Inicia sesión con tu cuenta de Google para comenzar!</span></h3>
                </div>
                
                <div className="g-signin2" data-onsuccess="onSignIn"></div>
                

            
               
                


            </div>

    


        </div>
         
          
        );
      }
}

export default Login;
