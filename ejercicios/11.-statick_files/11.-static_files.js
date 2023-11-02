// anteriormente vimos que podemos enviar archivos desde nuestra api al cliente, pero que pasa si tenemos muchos archivos que queremos enviar al cliente, enviar uno por uno seria demasiado laborioso, pues para ello express nos trae un metodo llamado static, este metodo toma todos los elementos dentro de una carpeta y los envia al cliente segun el nombre del archivo, como veremos a continuacion 

const express = require('express'); 
const morgan = require('morgan');
const app = express(); 

app.set('port', 3000); 
app.use(morgan('dev'));  
 

app.get('/prueba', (req, res)=>{ 
    res.status(200).contentType('text/plain'); 
    res.send('probando metodo static'); 
});  

// como podemos ver si nosotros queremos acceder a los archivos de la carpeta public, podemos hacerlo a traves de su nombre, en este caso creamos un middleware que nos devuelve los archivos de dicha carpeta, si hay un archivo con un index.html recordemos que por defecto el navegador nos lo abrira, por lo cual si ninguna de las rutas anteriores se cumple el midleware nos devolvera el index.html. 

// ahora si queremos acceder a otro archivo solo bastara con poner el nombre del archivo en la ruta por ejemplo. 
// http://localhost:3000/holamundo.txt 
// y nos devolvera ese archivo
app.use(express.static('./public')); 


app.listen(app.get('port'), ()=>{ 
    console.log(`el servidor esta escuchando en el puerto ${app.get('port')}`); 
}); 