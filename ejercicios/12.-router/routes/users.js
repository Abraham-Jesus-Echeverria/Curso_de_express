const express = require('express'); 

const router = express.Router(); 

router.get('/admin',  (req, res)=>{ 
    res.status(200).type('text/plain'); 
    res.send('esto es el admin'); 
}) 

router.get('/user', (req, res)=>{ 
    res.status(200).type('text/plain'); 
    res.send('esto es un usuario'); 
}) 

module.exports = router 