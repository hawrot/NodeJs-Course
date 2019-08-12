const express = require('express');
const router = express.Router();



router.use('/',(req,res,next) =>{
    console.log('In the another middleware');
    res.send('<h1>Hello from express</h1>');
});

module.exports = router;