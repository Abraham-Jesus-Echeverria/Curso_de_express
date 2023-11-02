// anteriormente vimos que los middlewares nos sirven para poder parsear nuestra informacion, para realizar validaciones de autenticacion que cortan el flujo del servidor entre otras cosas, pero existe otro termino llamado settings dentro de express, los settings nos pueden servir para declarar variables de configuracion globales, o modificar el comportamiento por defecto de las funcionalidades de express: 

const express = require('express'); 
const morgan = require('morgan');
const app = express();   

// los settings de express nos pueden servir para generar datos que esten dentro del objeto app, esto nos puede ayudar acceder a esta informacion desde cualquier modulo de la app, es como si estuvieras declarando una variable global 

// para declarar el setting usamos el metodo set seguido de la clave y el valor de la variable por ejemplo declarar le puerto en el que escuchara tu API, a continuacion veremos un ejemplo; 
app.set('port', 3003) 

// algo que es sumamente importante es que primero deberemos declarar nuestros settings, luego los middlewares y por ultimo las rutas, ya que de lo contrario podrias tener problemas, con esto. 

// asi como nosotros podemos crear nuestros settings, express tambien trae los suyos que nos ayudan a configurar express segun el uso que le vayamos a dar
// un ejemplo de esto es lo siguiente por defecto express no es caseSensitive en las rutas, es decir que no importa si la ruta esta escrita en mayusculas o minisculas, lo interpretata como si fueran iguales, por lo cual si queremos evitar esto tendremos que usar el siguiente setting que ya trae express: 

// es importante mencionar que el setting: case sensitive routing es una palabra reservada de express, por lo que si queremos usarlo tendremos que escribirlo exactamente igual
app.set('case sensitive routing', true);   

// y de esta manera hay mas settings de express que nos permiten configurarlo para nuestro uso segun la estructura de nuestros proyectos


app.use(express.json());  
app.use(morgan('dev'));  
app.use((req, res, next)=>{ 
    console.log('ejemplo de middleware'); 
    next(); 
}); 

app.get('/data', (req ,res)=>{  
    // como podemos observar podemos acceder a esta varible desde cualquier parte del codigo
    console.log(`accediendo al puerto ${app.get('port')}`)
    res.json({ 
        message: 'accediendo a la data',  
        port: app.get('port')
    }); 
}); 

// para poder acceder al valor de la variable usamos el metodo get('key') segido de la key de la variable;
app.listen(app.get('port'), ()=>{ 
console.log(`el puerto esta escuchando en el puerto ${app.get('port')}`); 
})