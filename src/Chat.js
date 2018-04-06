import React, { Component } from 'react';
import './Chat.css';
import Client from './Client';
class Chat extends Component{

    constructor(props){
        super(props);
        console.log("CONSTRUCTOR CHAT!");
        this.state = { chat:["Bienvenidos!"], message:"", secondsElapsed: 0 };
        this.handleChangeChat = this.handleChangeChat.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
        /*var obj = new Object();
        obj.name = this.props.usuario.name;
        obj.tam = this.props.tam;
        var jsonString= JSON.stringify(obj);
        this.client.metodoPOST(jsonString).then(result => this.setState({metodo:result}));   */ 
        console.log("props chat: "+this.props.chat);
        console.log("time: "+this.state.secondsElapsed);
      }

     

      tick() {
         console.log("xxx");
         
         this.setState({secondsElapsed: this.state.secondsElapsed + 1});
         //consultar server por nuevos mensajes
         console.log(JSON.stringify(this.state))
      }

      componentDidMount() {
        console.log("COMPONENT DIDMOUNT!");
        console.log(JSON.stringify(this.state))

        //this.interval = setInterval(this.tick.bind(this), 250);
      }

      componentWillUnmount() {
        clearInterval(this.interval);
      }

    fillChat(){
        console.log("send clicked");
        console.log(JSON.stringify(this.state))
        document.getElementById("chatbox").innerHTML = "me cago en satanas";
        
        
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
                           

                                {this.state.chat.map((message, index) => (

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