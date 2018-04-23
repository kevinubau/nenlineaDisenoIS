export default class Client{

    constructor(){
        this.ip = "172.24.67.53";//"192.168.43.115";
        console.log("IP: "+this.ip);
    }
    
    
    metodoPOST(n){//para llenar la matriz inicial del juego
        
        console.log("Metodo Post Request: "+n);
        var result = new Promise((resolve, reject) => {


            var request = new XMLHttpRequest();
            
            
            request.open("POST", "http://"+this.ip+":8080/nenlineaBackend/nenlineaBackend");
            request.onloadend = () => {
                
                var raw =  request.responseText;   
                console.log("metodoPOST response: "+raw);
                var obj = JSON.parse(raw);

                resolve(obj);
                
            }

            request.send(n);
        
        
        
        });
 
        return result;


    }




    validarPOST(objeto){//para el clic

        
        console.log("enviando.. "+JSON.stringify(objeto));
        let result = new Promise((resolve, reject) => {

            let request = new XMLHttpRequest();

            request.open("POST", "http://"+this.ip+":8080/nenlineaBackend/nenlineaBackend");//"http://localhost:8080/mavenproject1/resources/jsonprueba/validar", true);
            
            request.onloadend = () => {
                
                var raw =  request.response;
                var obj = JSON.parse(raw);

                //console.log("recibe... "+raw);
                
                resolve(obj);
                
            }

            request.send(JSON.stringify(objeto));
        
        
        
        });
        
        return result;


    }


    getJuegos(param){//para obtener la lista de juegos disponibles sin aceptar

        console.log("getJuegos raw: "+param);
        var result = new Promise((resolve, reject) => {
            
            var request = new XMLHttpRequest();
            
            request.open("POST", "http://"+this.ip+":8080/nenlineaBackend/nenlineaBackend");//http://localhost:8080/mavenproject1/resources/jsonprueba/jsonpost");

            request.onloadend = () => {
            
                var raw =  request.responseText;  
                
                
                
                var obj = JSON.parse(raw); 
                console.log("Response: "+raw);           
                
                resolve(obj);
                
            }

            request.send(param);
        
        
        
        });
 
        return result;


    }


    acceptGame(param){//para aceptar un juego

        
        var result = new Promise((resolve, reject) => {
            
            var request = new XMLHttpRequest();
            
            request.open("POST", "http://"+this.ip+":8080/nenlineaBackend/nenlineaBackend");//http://localhost:8080/mavenproject1/resources/jsonprueba/jsonpost");

            request.onloadend = () => {
            
                var raw =  request.responseText;   
                //console.log("acceptGame raw: "+raw);
                var obj = JSON.parse(raw);

                resolve(obj);
                
            }

            request.send(param);
        
        
        
        });
 
        return result;


    }


    verificarAceptar(param){//para verificar si un juego ya ha sido aceptado

        //alert("verificar aceptar "+param);
        var result = new Promise((resolve, reject) => {
            
            var request = new XMLHttpRequest();
            
            request.open("POST", "http://"+this.ip+":8080/nenlineaBackend/nenlineaBackend");//http://localhost:8080/mavenproject1/resources/jsonprueba/jsonpost");

            request.onloadend = () => {
            
                var raw =  request.responseText;   
                //console.log("verificar raw: "+raw);
                var obj = JSON.parse(raw);

                resolve(obj);
                
            }

            request.send(param);
        
        
        
        });
 
        return result;


    }


   



    
    
    

}//fin class
