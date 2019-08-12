const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');



router.use('/',(req,res,next) =>{
    console.log('In the another middleware');
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    //res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;