import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import SetUp from './SetUp';
import PartidasDisponibles from './PartidasDisponibles';
import "./css/Main.css";
import PartidasPausadas from './PartidasPausadas';

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
        const divStyle={
            overflowY: 'scroll',
            height: '100%'
          }
        return (
            
            <div className="container">
                <br/>
                <div className="row ">
                    
                   

                    <div className="col-sm-6 col-md-6 col-lg-6">

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
                        
                        <hr/>

                        <form onSubmit={this.redirectToGameSetUp}>
                            <input className="btn btn-secondary btn-lg" type="submit" value="Iniciar un Juego Nuevo" onClick={this.redirectToGameSetUp} />
                        </form>
                   
                    </div>

                    

                    <div style={divStyle} className="col-sm-6 col-md-6 col-lg-6">
                        <PartidasDisponibles usuario={this.props.usuario}/>
                        <br/>
                        <hr/>
                        <br/>
                        <PartidasPausadas usuario={this.props.usuario}/>
                    </div>

                    


                </div>

                
                
            </div>

        );
    }




}
export default Main;
