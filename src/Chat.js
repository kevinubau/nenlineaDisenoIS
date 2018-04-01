import React, { Component } from 'react';
import './Chat.css';

class Chat extends Component{



    render(){

        return(
            <div>
                <h3>CHAT</h3>

                <div id="wrapper">
                    <div id="menu">
                        <p className="welcome">Welcome, <b></b></p>
                        
                        
                    </div>
                    
                    <div id="chatbox"></div>
                    
                    <form name="message" action="">
                        <input name="usermsg" type="text" id="usermsg" size="63" />
                        <input name="submitmsg" type="button"  id="submitmsg" value="Send" />
                    </form>
                </div>
            </div>
        )
    }
}
export default Chat;