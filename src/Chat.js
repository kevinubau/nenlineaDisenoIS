import React, { Component } from 'react';
import './css/Chat.css';
import Client from './Client';
class Chat extends Component{

    constructor(props){

        super(props);

        this.client = new Client();
        console.log("CONSTRUCTOR CHAT!");

        this.state = { chat:["Bienvenidos!"], message:"", secondsElapsed: 0, juego:{} };

        this.handleChangeChat = this.handleChangeChat.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
        
        
        console.log("time: "+this.state.secondsElapsed);
    }

     

    tick() {

        console.log("chat");
        
        this.setState({secondsElapsed: this.state.secondsElapsed + 1});
        //consultar server por nuevos mensajes

        var obj = {};    
        obj.id = this.props.juego.id;
        obj.descrip = "actualizarChat";
        obj.chat = this.props.juego.chat;
        this.client.verificarAceptar(JSON.stringify(obj)).then(result => this.setState({juego:result})); 
        console.log("chat CHAT tick "+JSON.stringify(this.state.juego))


        this.setState({chat: this.props.juego.chat});
        console.log(JSON.stringify(this.state))
    }

        componentDidMount() {

        this.setState({juego: this.props.juego});
        //console.log("COMPONENT DIDMOUNT!"+JSON.stringify(this.state));
        console.log("state chat didmount: "+this.state.juego);

        //this.interval = setInterval(this.tick.bind(this), 1000);
        }

    componentWillUnmount() {

        clearInterval(this.interval);
    }




    handleChangeChat(messageGet) {
        
        var cars = this.state.chat;
        messageGet = this.props.usuario.name+": "+messageGet;
        this.setState({message: messageGet});

        console.log("final state of message: "+this.state.message)

        cars.push(messageGet)
        
        console.log(cars)
    
        this.setState({chat:cars});
        this.setState({message: ""});

    
        console.log("chat CHAT "+JSON.stringify(this.props.juego.chat))
        var obj = {};  
        obj.id = this.props.juego.id;
        obj.descrip = "actualizarChat";
        obj.chat = cars;
        this.client.verificarAceptar(JSON.stringify(obj)).then(result => this.setState({juego:result})); 
        console.log("chat CHAT handle "+JSON.stringify(this.props.juego))
        this.setState({chat: this.props.juego.chat});
    
      }

      handleChangeInput(event) {
        
        console.log("before setting message: "+event.target.value);
        this.setState({message: event.target.value});
        console.log("after setting message: "+this.state.message);

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
                            {/*<input name="submitmsg" type="button"  id="submitmsg" value="Send" onClick={() => this.casilla()} />*/}
                        <button className="btn" name="submitmsg" type="button"   id="enviarBtn" onClick={() => this.handleChangeChat(this.state.message)} >Enviar</button>              
                   
                    
                </div>
            </div>
           
        )
        /*return(
            <div>
                    <section id="messages-list">
                            <ul>

                                {this.state.chat.map((message, index) => (

                                    <p key={index}>{message}</p>

                                ))}

                            </ul>
                        </section>

            </div>
        )*/
    }
    
}
export default Chat;