const express = require('express'); 
const app = express(); 
const port = 3000; 

// los metodos http o vervos http nos permiten decirle a nuestro servidor que operacion queremos realizar, algunos ejemplo mas comunes de estos verbos son los siguientes: 

// get: le indicamos al servidor que queremos obtener informacion  

// post: le indicamos al servirdor que queremos crear algo o introducir informacion. 

// put: le indicamos al servidor que quermos actualizar toda la informacion

// path: le decimos al servidor que queremos actualizar una parte de la informacion 

// delete: le decimos al servidor que queremos eliminar algo. 

// estos verbos o metodos son los mas comunes y normalmente son los que mas se utilizan en una  API Rest
// A este conjunto de verbos se le conoce como CRUD, por sus siglas en ingles (CREATE, READ, UPDATE, DELETE) 

// estos verbos son mandados desde el cliente hasta el servidor, y en caso de express este nos da diferentes metodos para poder manejar estos verbos los cuales veremos a continuacion:

app.get('/reportes', (req, res)=>{ 
    res.status(200).contentType('text/html'); 
    res.send(`<h1>metodo ${req.method} obtenido </h1>`);  
}) 

app.post('/reportes', (req, res)=>{ 
    res.status(200).contentType('text/html');  
    res.send(`<h1>metodo ${req.method} obtenido </h1>`);  
}) 

app.put('/reportes', (req, res)=>{ 
    res.status(200).contentType('text/html'); 
    res.send(`<h1>metodo ${req.method} obtenido </h1>`); 
})  

app.patch('/reportes', (req, res)=>{ 
    res.status(200).contentType('text/html'); 
    res.send(`<h1>metodo ${req.method} obtenido </h1>`); 
})

// algo que es importante mencionar es que en este ejemplo especificamos el codigo de respuesta como 204, el codigo 204 nos indica que la peticion se realizo exitosamente, pero no devolveremos nada por lo cual es res.send() debera estar vacio;
app.delete('/reportes', (req, res)=>{
    res.status(204).contentType('text/html'); 
    res.send(`<h1>metodo ${req.method} obtenido </h1>`); 
})  

// como pdemos observar podemos agregar diferentes metodos a una ruta, pero no podemos poner el mismo metodo dos veces en la misma ruta, esta aplica tambien para put como para patch ya que ambas cumplen una funcion similar


app.listen(port, ()=>{ 
    console.log(`el puerto esta escuchando en el puerto ${port}`);  
}); 