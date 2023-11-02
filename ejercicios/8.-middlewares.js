// un midelware no es mas que una funcion que se ejecuta antes de llegar a nuestras rutas a nuestros request handler, es importante conocer el concepto de midelware, ya que no solo express hace uso de estos, tambien otros frameworks del backend, 

// los middlewares son sumamente importantes ya que nos permiten realizar diferentes acciones antes de poder ejecutar nuestras rutas, por ejemplo hacer una autenticacion, protejer una ruta, poder obvservar por consola, las peticiones que hicimos a la api, parsear la informacion para que nuestras rutas lo reconozcan etc, etc, a continuacion veremos un ejemplo de como funcionan los middlewares; 

const express  = require('express') 
const app = express();  
const port = 3000;  

// un middleware se crea con el metodo use como veremos a continuacion;  
// a este metodo le pasaremos una callback que recibira tres parametros, el req, res, next, 

// algo que igual es importante mencionar es como apilamos el middleware, ya que un middleware solo va estar disponible para las rutas que se encuentren debajo de el 

app.use((req, res, next)=>{  
    const {method, url} = req; 
    console.log(`esto es un middleware el metodo es ${method}, la ruta es ${url}`); 
    // debemos usar el metodo next, para poder continuar con el flujo de la API de lo contrario el middleware rompera con el flujo y la pagina se quedara en cargando
    next(); 
}) 

app.all('/info', (req, res)=>{ 
    res.send(`informaciond de la api ejemplo middleware`); 
}) 

app.get('/data', (req, res)=>{ 
    res.send('enviando data XD'); 
}) 

// a continuacion mostraremos un ejemplo simple simulando la autenticacion de un usuario y protejiendo una ruta 

// en esta middleware hacemos una validacion, a traves de una queryParam si la queryParam no coincide con la validacion no podremos acceder a las rutas debajo de esta ya que rompemos el flujo con el metodo send, pero si la condicion se cumple entonces podremos acceder a todas las rutas que esten debajo de este; 
app.use((req, res, next)=>{  
    const user = req.query.user; 
    if(user === 'abraham'){ 
        console.log('tiene acceso'); 
        next(); 
    }else{ 
        res.send('¡Lo sentimos no tienes acceso!'); 
    }
});  

app.get('/profile', (req, res)=>{ 
    res.send('tu perfil es el siguiente...')
});  


// anteriormente vimos que para poder acceder al bodyRequest de una peticion primero tendriamos que usar los siguientes metodos:
// app.use(express.text());  para cadenas de texto 
// app.use(express.json()); para formato json 
// app.use(express.urlencoded({extended:false})) para formularios de js  

// pues estos tambien son middlewares ya que primero parsean la informacion de express y luego la pasan a las rutas para que estos puedan procesar la informacion



app.listen(port, ()=>{ 
    console.log(`el servidor esta escuchando en el puerto ${port}`); 
}); 