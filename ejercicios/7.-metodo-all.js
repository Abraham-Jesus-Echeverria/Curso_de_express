// el metodo all es un metodo que funciona con cualquiera de los verbos CRUD por ejemplo si yo creo una ruta con el metodo all cuando yo haga una peticion a esta ruta, no importa si el verbo es post,get,put,delete,patch ya que como su nombre lo indica sirve para cualquier verbo a continuacion veremos un ejemplo de este metodo: 


const express = require('express') 
const app = express(); 
const port = 3000; 

app.all('/info',(req, res)=>{ 
    const {method} = req
    res.send(`vienbenidos este metodo all el verbo es ${method}`); 
})

app.listen(port, ()=>{   
    console.log(`el servidor esta escuchando en el puerto ${port} `);
})