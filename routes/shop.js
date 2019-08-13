const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const adminData = require('./admin');


router.get('/', (req, res, next) => {
  const products = adminData.produts;
  res.render('shop', {prods: products, docTitle: 'Shop', path: '/'})
  //res.sendFile(path.join(rootDir, 'views', 'shop.html'));

});

module.exports = router;
