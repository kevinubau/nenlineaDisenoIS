import React, { Component } from 'react';
import './Chat.css';
import Client from './Client';
class Chat extends Component{

    constructor(props){
        super(props);
    
        this.state = { chat:["hola", "mundo"], message:"" };
        this.handleChangeChat = this.handleChangeChat.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
        /*var obj = new Object();
        obj.name = this.props.usuario.name;
        obj.tam = this.props.tam;
        var jsonString= JSON.stringify(obj);
        this.client.metodoPOST(jsonString).then(result => this.setState({metodo:result}));   */ 
    
      }

    fillChat(){
        console.log("send clicked");
        document.getElementById("chatbox").innerHTML = "me cago en satanas";
        
        
    }
    handleChangeChat(message) {
        
        var cars = this.state.chat;
        cars.push(message)
        console.log(cars)
        
        this.setState({chat:cars});
        console.log("message puta: "+message);
        this.setState({message: ""});
        //document.getElementById("chatbox").innerHTML = event.target.value;
        //document.getElementById("usermsg").innerHTML = event.target.value;
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
                            <ul>

                                {this.state.chat.map((message, index) => (

                                   <div key={index}> {message}</div>

                                ))}

                            </ul>
                        </section>
                    </div>
                
               
                        <input name="usermsg" type="text" id="usermsg" size="63" value={this.state.message} onChange={this.handleChangeInput} />
                            {/*<input name="submitmsg" type="button"  id="submitmsg" value="Send" onClick={() => this.casilla()} />*/}
                        <button name="submitmsg" type="button"   id="" onClick={() => this.handleChangeChat(this.state.message)} >Enviar</button>              
                   
                    
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