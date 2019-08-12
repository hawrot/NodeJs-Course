//const http = require('http');
const express =require('express');
const bodyParser = require('body-parser');
const app = express();

const adminRouters = require('./routes/admin');
const shopRouters = require('./routes/shop');

app.use(bodyParser.urlencoded());

app.use('/admin', adminRouters);
app.use('/admin', shopRouters);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Not found</h1>');
});




app.listen(3000);



