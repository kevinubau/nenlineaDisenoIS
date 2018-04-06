export default class Client{


    metodoPOST(n){//para llenar la matriz inicial del juego

        
        var result = new Promise((resolve, reject) => {
            //request.setRequestHeader();
            var request = new XMLHttpRequest();
            //192.168.43.115 wifi claro
            request.open("POST", "http://localhost:8080/nenlineaBackend/nenlineaBackend");//http://localhost:8080/mavenproject1/resources/jsonprueba/jsonpost");

            request.onreadystatechange = () => {
                
                var raw =  request.responseText;   
                console.log("metodoPOST raw: "+raw);
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

            request.open("POST", "http://localhost:8080/nenlineaBackend/nenlineaBackend");//"http://localhost:8080/mavenproject1/resources/jsonprueba/validar", true);
            
            request.onreadystatechange = () => {
                
                var raw =  request.response;
                var obj = JSON.parse(raw);

                console.log("recibe... "+raw);
                
                resolve(obj);
                
            }

            request.send(JSON.stringify(objeto));
        
        
        
        });
        
        return result;


    }


    getJuegos(param){//para obtener la lista de juegos disponibles sin aceptar

        
        var result = new Promise((resolve, reject) => {
            
            var request = new XMLHttpRequest();
            
            request.open("POST", "http://localhost:8080/nenlineaBackend/nenlineaBackend");//http://localhost:8080/mavenproject1/resources/jsonprueba/jsonpost");

            request.onreadystatechange = () => {
            
                var raw =  request.responseText;   
                console.log("getJuegos raw: "+raw);
                var obj = JSON.parse(raw);

                //sdkfj
            
                resolve(obj);
                
            }

            request.send(param);
        
        
        
        });
 
        return result;


    }


    acceptGame(param){//para aceptar un juego

        
        var result = new Promise((resolve, reject) => {
            
            var request = new XMLHttpRequest();
            
            request.open("POST", "http://localhost:8080/nenlineaBackend/nenlineaBackend");//http://localhost:8080/mavenproject1/resources/jsonprueba/jsonpost");

            request.onreadystatechange = () => {
            
                var raw =  request.responseText;   
                console.log("acceptGame raw: "+raw);
                var obj = JSON.parse(raw);

                resolve(obj);
                
            }

            request.send(param);
        
        
        
        });
 
        return result;


    }


    verificarAceptar(param){//para verificar si un juego ya ha sido aceptado

        
        var result = new Promise((resolve, reject) => {
            
            var request = new XMLHttpRequest();
            
            request.open("POST", "http://localhost:8080/nenlineaBackend/nenlineaBackend");//http://localhost:8080/mavenproject1/resources/jsonprueba/jsonpost");

            request.onreadystatechange = () => {
            
                var raw =  request.responseText;   
                console.log("verificar raw: "+raw);
                var obj = JSON.parse(raw);

                resolve(obj);
                
            }

            request.send(param);
        
        
        
        });
 
        return result;


    }


   



    
    
    

}//fin class
