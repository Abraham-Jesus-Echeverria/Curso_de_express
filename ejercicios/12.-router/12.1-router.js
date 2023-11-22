// anteriormente vimos como crear nuestras rutas con express, pero no podemos tener las mismas rutas en un mismo archivo ya que esto seria dificil de leer y nuestro archivo quedaria mucho mas largo, para esto express nos trae un modulo llamado router, el cual nos permite exportar nuestras rutas de diferentes archivos, como veremos a continuacion: 

const express = require('express'); 
const morgan = require('morgan'); 
const app = express();     

// exportando rutas
const users = require('./routes/users');  
const refacciones = require('./routes/refacciones'); 

// ----SETTINGS----

app.set('port', 3000);   
// ----MIDDLEWARES---
app.use(morgan('dev')); 
app.use((req, res, next)=>{  
    console.log('esto es un middleware'); 
    next(); 
});  

// -------RUTAS-------  
app.get('', (req, res)=>{   
    res.status(200).type('text/plain'); 
    res.send('API ROUTER'); 
});  

//----RUTAS----

app.use(users);  
app.use(refacciones);  

app.use((req, res)=>{ 
    res.sendFile(`${__dirname}/notFound/index.html`)
}); 


// ---EJECUTANDO API----
app.listen(app.get('port'), ()=>{ 
    console.log(`el servidor esta escuchandoe en el puerto ${app.get('port')}`)
}); 

