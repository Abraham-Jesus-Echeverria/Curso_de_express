// cuando nosotros hacemos peticiones a una api ya sea un post un put, un get etc, este nos devuelve una respuesta, pero para poder transferir estos datos a traves del protocolo http, la peticion debe seguir una estructura en especifico, como la siguiente: 

// endPoint: conforma el path o el camino a la cual enviaremos la peticion por ejemplo refacciones/almacen/venta 

// body: conforma el cuerpo de la peticion es decir el contenido a enviar, y este normalmente viene en un formato de transferencia de datos, ya sea xml o json 

// headers: tambien conocido como cabecera de la peticion, los headers nos sirven para especificar la informacion de la peticion, por ejemplo el tipo de dato que estamos enviando, application/json, text/html, o tambien el codigo de estado de la respuesta etc.. es importante configurar los headers ya que le brindan informacion al cliente que ayuda a procesar la peticion mucho mas rapido. 

// a continuacion veremos un ejemplo de como poder acceder al request body a traves de express, esto nos puede servir para enviar datos a una base de datos, entre otras cosas 

// para que nosotros podamos usar el body dentro de nuestros metodos CRUD, lo que deberemos hacer es procesar la informacion antes de que llegue a la ruta, de lo contrario no podremos usar esta informacion, a continuacion veremos como hacer esto
const express = require('express'); 
const app = express();  
const port = 3000;   

// con la funcion express.text() podemos parsear y procesar cadenas de texto
app.use(express.text());  

// con la funcion express.json() podemos parsear y procesar objetos json
app.use(express.json());  

// con la funcion urlencoded() nosotros podemos parsear y procesar valores que nos envien a traves de formularios, el objeto de configuracion de extended:false nos indica que solo vamos a procesar objetos simples, con valores de string y arrays, algo que es importante mencionar es que cuando configuramos la funcion con su extended en false el tipo de dato que enviaremos o recibiremos se establece como: 
// application/x-www-form-urlencoded 
// si lo dejamos en true como esta por default el valor del tipo de dato puede ser: 
// application/x-www-form-urlencoded o application/json
app.use(express.urlencoded({extended:false}))

app.post('/apiPost/text', (req, res)=>{  
    let body = req.body;   
    console.log(body);  
    res.send('peticion post recivida text'); 
});  

app.post('/apiPost/json', (req, res)=>{  
    let body = req.body;   
    console.log(body);  
    res.send('peticion post recivida json'); 
}); 

app.post('/apiPost/urlencoded', (req, res)=>{  
    let body = req.body; 
    let headers = req.headers;   
    console.log(body);   
    console.log(headers);
    res.send('peticion post recivida urlencoded'); 
}); 

app.use((req, res)=>{ 
    res.status(200).contentType('text/plain'); 
    res.send('Lo sentimos pero no pudimos procesar su peticion')
})

app.listen(port, ()=>{ 
    console.log(`el servidor esta funcionando en el puerto ${port}`); 
})