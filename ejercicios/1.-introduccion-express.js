const express = require('express'); 
const app = express();  
const port = 3000; 

app.get('/', (req, res) =>{   
    /* algo que es sumamente importante mencionar es que express guarda en el cache del  
    navegador el tipo de respuesta por lo cual si queremos cambiarlo y luego ver los cambios debermos borrar la cache del navegador
     */
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.status(200).contentType('text/html'); 
    res.send('<h1>¡Hola, mundo!</h1>');
    // res.status(200).contentType('text/html').send('<h1>Hola mundo desde express</h1>'); 
    
    // res.writeHead(200, {'Content-Type': 'text/html' }); 
    // res.end('<h1>hola mundo desde node</h1>'); 
}); 

app.listen(port, ()=>{ 
    console.log(`Servidor funcionando en el puerto ${port}`); 
});  

/* express es un framework de node, que nos ayuda a poder realizar nuestras APIS de manera mas sencilla, ya que nos dota de diversas herramientas que nos facilitan el trabajo. 

una de las principales caracteristicas de node es que este no nos obliga a llevar una estructura de nuestro proyecto definida, si no que nosotros podremos estructurar nuestro proyecto como mas nos convenga dependiendo de los requerimientos del mismo anteriormente vimos a como realizar un servidor de node basico.*/
