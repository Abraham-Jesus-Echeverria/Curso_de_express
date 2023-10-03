const express = require('express'); 
const app = express();  

const port = 3000; 

// usar el routing en expres es muy facil, lo unico que tenemos que hacer es generar una funcion con el metodo HTTP que vayamos a usar, esta funcion recibira dos parametros, el primero es la ruta, o el path que necesitamos y luego el handler request que es una funcion que nos permitira obtener datos de la peticion, y devolver una respuesta con los objetos req y res, 
app.get('/', (req, res)=>{ 
    console.log(req.method, req.url);   
    res.status(200).contentType('text/plain'); 
    res.send('Vienvenido a mi primera API ');  
 });  

//  como podemos ver aqui usamos una ruta totalmente diferente, por lo cual si usamos el metodo get a traves de una peticion http, y accedemos a la ruta establecidam, entonces se ejecutara el handler request de esa funcion
 app.get('/usuarios', (req, res) =>{  
    // console.log(req.method, req.url); 
    res.status(200).contentType('text/plain');  
    res.send('Usuarios XD')
 }); 

 app.get('/tareas', (req, res)=>{ 
    console.log(req.method, req.url);  
    res.status(200).contentType('text/plain');  
    // cabe mencionar que express trae consigo el metodo send este metodo es equivalente al metodo end de node, pero a diferencia de el metodo end este le proporciona mas informacion al navegador por lo cual para el navegador es mas facil y mas rapido procesar la respuesta proporcionada por el metodo send 
    // algo que es importante mencionar es tambien podremos usar los metodos de node para realizar nuestras respuestas ya que express no nos obliga a seguir una estructura para nuestros proyectos
    res.send('tareas XD'); 
 }) 

//  cuando nosotros ingresamos una ruta con un metodo que no existe, el navegador nos devuelve un mensaje de error para poder personalizar ese error y manejarlo usamos este metodo, podemos decir que de esta manera el metodo se comporta como una ruta por default, que en caso de que no se ecuentre la ruta que especificamos nos devolvera lo que le indiquemos en este metodo 
// es importante mencionar que por default express nos devuelve un codigo de estado 200 cuando manejamos la respuesta de una peticion, por lo cual necesitamos especificar un codigo diferente, en este caso usamos el codigo 404 not found que normalmente se usa cuando no econtramos la ruta especificada
 app.use((req, res)=>{   
    console.log(req.path);  
    console.log(req.url);
    res.status(404).contentType('text/plain') 
    res.send('Lo sentimos pero no pudimos encontrar la ruta que buscabas'); 
 })

 app.listen(port, ()=>{ 
    console.log(`el servidor esta escuchando en el puerto ${port}`); 
 })