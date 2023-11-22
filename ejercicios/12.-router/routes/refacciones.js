const express = require('express'); 
const router = express.Router(); 

router.get('/all', (req, res)=>{ 
    res.status(200).type('text/plain'); 
    res.send('all Refactions'); 
}) 

router.get('/llaves', (req, res)=>{ 
    res.status(200).type('text/plain'); 
    res.send('llaves refaction'); 
});  

module.exports = router; 