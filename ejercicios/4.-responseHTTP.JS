// anteriormente vimos como usar diferentes meetodos o verebos http, por lo cual una ves que nuestra api reciba un metodo tendra que dar una respuesta, para ello express nos dota de dierentes metodo lo cuales veremos a continuacion: 

const express = require('express'); 
const app = express(); 
const port = 3000; 

// con el metodo send nosotros podremos mandar cualquier tipo de dato, ya sea un texto, un objeto JSON un archivo entre otros, pero al no definir un tipo de dato especifico el navegador tardara un poco mas en procesar la respuesta, por lo cuaL lo mas recomendable al usar el metodo send es especificar el contentType con el tipo de dato que enviaras
app.get('/' , (req, res)=>{ 
    res.contentType('text/plain'); 
    res.send('vienvenido a mi API'); 
});

// con el metodo json nosotros podremos enviar informacion en formtato json, esto normalmente lo hacemos cuando consultamos informacion a una base de datos y este nos devuelve la respuesta, este metodo configura automaticamente el Content-Type como application/json;  
app.get('/json', (req, res)=>{ 
    res.json({"data": "hola"}); 
}); 

// con el metodo sendFile nosotros podremos mandar como respuestas cualquier tipo de archivo, (imagenes, videos, txt, etc), lo unico que tenemos que hacer es pasarle la ruta relativa donde se ecunetra el archivo, y como segundo parametro un objeto con el root: definida con la variable __dirname, esta variable es una variable de node, y nos da el valor de la carpeta raiz en la cual se esta ejecutando el servidor actual, por lo cual convertimos nuestra ruta relativa, en una ruta absoluta, ya que si no hacemos esto, tendremos que especificar la ruta absoluta manualmente, y como segundo parametro le pasamos una callback que manjera el error en caso de que algo haya fallado
app.get('/file', (req, res)=>{ 
    res.sendFile('./assets/hola.txt', { 
        root: __dirname
    }, (err) => { 
        if(err) { 
            console.log('lo sentimos ha ocurrido un error'); 
            console.log(err);
        }
    });  
    console.log(__dirname); 
}); 

// el metodo sendStatus, lo unico que va hacer es devolvernos el codigo de estado sin tener que cambiar la vista en la que nos encontramos actualmente, ya que no podremos notar la diferencia cuando cambiemos a esta ruta a menos que vayamos a las herramientas de desarrollador del navegador y veamos el codigo de estado que nos debera devolver ese 204;  

// nota: la ruta isAlive normalmente se usa en el backend para verificar si el servidor sigue funcionando normalmente, mandamos un get al la ruta y si este nos devuelve un codigo de estado positivo, esto quiere decir que el servidor funciona adecuadamente
app.get('/isAlive', (req, res)=>{ 
    res.sendStatus(204); 
})
app.listen(port, ()=>{ 
    console.log(`el servidor se ejecuta en el puerto ${port}`); 
})