// anteriomente vimos como crear un middleware y que es, en esta seccion veremos que pasa cuando apilamos dos middlewares seguidos 

// normalmente en una API podemos encontrar mas de un middleware, pero que pasa si apilamos un middleware sobre otro, pues esto es muy facil, se ejecutaran de arriba hacia abajo en ese orden, por ejemplo si tengo un middleware que me muestre por conola el metodo y la url y luego otro que me muestre un mensaje por consola que diga hola middleware, priemero se ejecutara el middleware que nos muestra el metodo y la url despues el que nos muestra el mensaje por consola, y de ultimo las rutas que esten debajo de esos middleware si es que ninguno de los middlewares rompe el flujo 

// a continuacion veremos un ejemplo de esto:  

const express = require('express'); 
const app = express();  
const port = 3000; 

app.use((req, res, next)=>{  
    const {method, url} = req; 
    console.log('este middleware se ejecuta primero'); 
    console.log(`metodo: ${method}, url: ${url}`);    
    next(); 
}); 

app.use((req, res, next)=>{  
    console.log('este middleware se ejecuta despues');  
    next(); 
}); 

app.all('/info', (req, res)=>{ 
    res.send('Tu informacion es la siguiente'); 
});   

// otra cosa que cabe mencionar es que las rutas tambien pueden recibir el metodo next para ejecutar mas de una ruta pero esto no es muy comun usarlo  

app.all('/users', (req, res, next)=>{
    console.log('tu usuario es user'); 
    next(); 
}); 

app.use((req, res, next)=>{ 
    res.send('hemos recivido la ruta users'); 
}); 

app.listen(port, ()=>{ 
    console.log(`el servidor esta escuchando en el puerto ${port}`); 
}) 