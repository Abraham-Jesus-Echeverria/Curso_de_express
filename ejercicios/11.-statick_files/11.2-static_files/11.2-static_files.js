const express = require('express'); 
const morgan = require('morgan');
const app = express();   
// este modulo nos sirve para gestinar nuestras y manipular nuestras rutas mucho mas facil
const path = require('path'); 

app.use(morgan('dev'));  
app.set('port', 3000);  

app.get('/', (req, res)=>{  
    res.status(200).contentType('text/plain'); 
    res.send('vienbenido a mi API de archivos'); 
});  

// si nosotros estamos corriendo el arhivo desde otra carpeta no podremos acceder a las carpetas a traves de una ruta relativa por lo cual tendremos que ingresar una ruta absoluta, para ello usamos la variable de entorno __dirname, que como bien sabemos nos da la ruta absoluta de la carpeta en la que nos encontramos y la concatenamos como en los siguientes ejemplos:
app.use('/downloads', express.static(`${__dirname}/downloads`));   
// el metodo join del modulo path nos sirve para concatenar diferentes rutas, por lo cual obtendremos la ruta absoluta concatenando la variable __dirname y la ruta de la carpeta de archivos a la cual queremos acceder
app.use('/archivos', express.static(path.join(__dirname, '/archivos'))); 

// por lo cual si tienes problemas para acceder a las carpetas de archivos usa  rutas absolutas, cualquiera de las dos sintaxis anteriores te podra ser util;

app.listen(app.get('port'), ()=>{ 
    console.log(`El servidor esta escuchando en el puerto ${app.get('port')}`); 
});

// nota para hacer funciona este ejemplo posiciona la consola una carpeta afuera y corre el programa de la siguiente manera: 

// node --watch ./11.2-static_files/11.2-static_files.js