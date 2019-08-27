const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();



router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);
router.get('/cart', shopController.getCart);
router.get('/checkout', shopController.getCheckout);
router.get('/orders', shopController.getOrders);
router.get('/products/:productId');   //:productId says to express that the value will be passed


module.exports = router;
