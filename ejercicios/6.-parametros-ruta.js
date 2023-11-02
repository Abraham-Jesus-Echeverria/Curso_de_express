// existen dos tipos diferentes de parametros en las rutas, y estas son las siguientes: 

// parametros de ruta: normalmente forman parte de la ruta o del camino de la ruta estas estan representadas por : seguido del nombre de la variable de la ruta por ejemplo lo siguiente:  www.pcoriente/clientes/:idUsuario  cuando nosotros usemos esa ruta tendremos que pasarle un valor que almacenara esa variable por ejemplo www.pcoriente/clientes/5 entonces idUsuario = 5, cabe mencionar que estos parametros nos devuelven un tipo de dato string, ya que normalmente las rutas o caminos son strings, algo que es importante mencionar es que estos parametros son obligatorios de usar en la ruta ya que sin ellos no podremos acceder. 

// parametros de consulta o queryParams: los queryParams, son variables que forman parte de la ruta, por lo cual es opcionar tenerlos ahi, normalmente para estan representadas de la siguiente manera: www.pcoriente/clientes/usuario?=nombreUsuario y para poder usarlo tendremos que hacerlo de la siguiente manera www.pcoriente/clientes/usuario?=Abraham por lo cual la variable usuario ahora es igual a "Abraham", normalmente los parametros de consulta se usan para filtrar la informacion, un ejemplo muy claro de esto es hacer una paginacion, 

// a continuacion veremos unos ejemplos de como usar estas rutas 
 
const express = require('express'); 
const app = express();   
const port = 3000; 

// express, por defecto parsea los parametros y los devuelve dentro del objeto params, por lo cual el objeto que representa esta ruta es la siguiente: {nombre:ruta} por lo cual para poder acceder a el valor de un parametro lo podemos hacer como normalmente lo ariamos con un objeto,
app.get('/hola/mundo/:nombre', (req, res)=>{  
    console.log(req.params); 
    res.send(`hola mundo la queryParam es ${req.params.nombre}`); 
});   

// cabe mencionar que tambien podemos agregar mas de un parametro en un ruta, en el caso de los parametros de ruta lo podemos hacer de la siguiente manera:  

// en este ejemplo usamos la destructuracion para poder hacer mas facil la sintaxis de nuestra consulta
app.get('/hola/mundo/ejemplo/:nombre/:apellido', (req, res)=>{  
    const {nombre, apellido} = req.params; 
    console.log(req.params);  
    res.send(`hola mundo la los query params son ${nombre} y ${apellido}`); 
});  

// a continuacion veremos un ejemplo de como usar las query params como mencionamos anteriormente las queryParams no forman parte de la ruta, por lo cual no es obligacion definir nada dentro de nuestra ruta, por lo cual nosotros podremos pasar cualquier parametro de consulta a una ruta, como lo veremos a continuacion   

// algo que es importante mencionar, que para poner mas de un parametro de consulta deberemos agregar el simbolo de & por ejemplo para esta ruta si quisiera agregar mas de un parametro de ruta podremos hacer lo siguiente: /ejemplo/parametro/consulta?search1=hola&search2=hola2

app.get('/ejemplo/parametro/consulta', (req, res)=>{ 
    console.log(req.query);
    res.send('consulta recibida'); 

});  

app.get('/ejemplo/validacion/queryParams', (req, res)=>{ 
    if(req.query.user === 'abraham'){  
        return res.sendFile('./assets/imagen1.jpg', { 
            root : __dirname
        }); 
    }; 
    res.send('no tienes acceso'); 
});  

// algo que es importante mencionar es que si nosotros mandamos dos veces el mismo parametro en la misma ruta, obtendremos un array con los valores de esos parametros es decir que si nosotros tenemos la siguiente ruta 
// localhost:3000/parametro/XD?user=Abraham&user=Aaron
// obtendremos un array como el siguiente: {user:[Abraham, Aaron]} 
// por lo cual podremos usar ese array, como normalmente lo hariamos como cualquier array 
app.get('/parametro/XD', (req, res)=>{  
    const {user} = req.query;    
    user.forEach(element=>{ 
        console.log(element); 
    }); 
    res.send('se ha recivido el array'); 
}); 

app.listen(port, ()=>{ 
    console.log(`el servidor esta corriendo en el puerto ${port}`); 
});  

