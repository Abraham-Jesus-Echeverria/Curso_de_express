// ahora imaginemos que tenemos mas de dos carpetas de archivos que queremos compartir por ejemplo una carpeta llamada descargas y otra llamada archivos, pues para compartir ambas carpetas podemos definir una ruta especifica para cada uno como veremos a continuacion: 

const express = require('express'); 
const morgan = require('morgan');
const app = express();  


app.set('port', 3000); 

app.use(morgan('dev'));  

app.get('/', (req, res)=>{ 
    res.status(200).contentType('text/plain')
    res.send('VIENBENIDO A MI API'); 
});  

app.use('/descargas', express.static('./descargas')); 
app.use('/public', express.static('./public')); 


app.listen(app.get('port'), ()=>{ 
    console.log(`el servidor esta escuchando en el puerto: ${app.get('port')}`)
}); 

