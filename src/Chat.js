import React, { Component } from 'react';
import './css/Chat.css';
import Client from './Client';

class Chat extends Component{

    constructor(props){

        super(props);

        this.client = new Client();
        

        this.state = { chat:[], message:"", secondsElapsed: 0};

        this.handleChangeChat = this.handleChangeChat.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
        
        
        
    }

     
    tick() {

    
        this.setState({secondsElapsed: this.state.secondsElapsed + 1});
        var obj = {};
        obj.id = this.state.juego.id;
        obj.descrip = "actualizarChat";
        obj.chat = this.state.chat;
        this.client.verificarAceptar(JSON.stringify(obj)); 
        this.setState({chat: this.props.juego.chat});
        
    }

    componentDidMount() {

        //this.setState({juego: this.props.juego});
        //this.interval = setInterval(this.tick.bind(this), 250);
    }

    componentWillUnmount() {

        clearInterval(this.interval);
    }

    handleChangeChat(messageGet) {
        
        var cars = this.state.chat;
        messageGet = this.props.usuario.name+": "+messageGet;
        this.setState({message: messageGet});

        cars.push(messageGet)

        this.setState({chat:cars});
        this.setState({message: ""});  
        
        var obj = {};
        obj.id = this.props.juego.id;
        obj.descrip = "actualizarChat";
        obj.chat = this.state.chat;

        this.client.verificarAceptar(JSON.stringify(obj)); 
        this.setState({chat: this.props.juego.chat});
    
      }

      handleChangeInput(event) {
        
        //console.log("before setting message: "+event.target.value);
        this.setState({message: event.target.value});
        //console.log("after setting message: "+this.state.message);

      }


    render(){

        return(
            <div>
                <h3>CHAT</h3>

                <div id="wrapper">
               
                    
                    <div id="chatbox">
                        <section id="messages-list">
                           

                                {this.props.juego.chat.map((message, index) => (

                                   <div key={index}> {message}</div>

                                ))}

                           
                        </section>
                    </div>
                
                    
                        <input className="form-control" name="usermsg" type="text" id="usermsg" size="63" value={this.state.message} onChange={this.handleChangeInput} />
                        <button className="btn" name="submitmsg" type="button"   id="enviarBtn" onClick={() => this.handleChangeChat(this.state.message)} >Enviar</button>              
                   
                    
                </div>
            </div>
           
        )

    }
    
}
export default Chat;