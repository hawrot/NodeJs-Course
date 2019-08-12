const http = require('http');
const express =require('express');
const bodyParser = require('body-parser');
const adminRouters = require('./routes/admin');
const shopRouters = require('./routes/shop');
const app = express();

app.use(adminRouters);
app.use(shopRouters);
app.use(bodyParser.urlencoded());






app.listen(3000);



