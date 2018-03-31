import React, { Component } from 'react';

class PartidasDisponibles extends Component{

   


    render(){

        return(
            <div>

                <div>
                    <h4><kbd>Partidas Disponibles:</kbd></h4>
                </div>
                
                <div className="container">

                    <div className="box">
                        <span className="badge">Tamaño: 4</span><span className="badge">Jugador: Ejemplo</span><br/>
                        <button className="btn">Aceptar</button>
                    </div>
                    <hr/>

                    <div className="box">
                        <span className="badge">Tamaño: 6</span><span className="badge">Jugador: Ejemplo</span><br/>
                        <button className="btn">Aceptar</button>
                    </div>
                    <hr/>
                  

                </div>

            </div>
        )
    }

}
export default PartidasDisponibles;