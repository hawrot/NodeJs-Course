const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();



router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);
router.get('/cart', shopController.GetCart);
router.get('/checkout', shopController.getCheckout);
router.get('/orders', shopController.getOrders);
router.post('/cart-delete-item', shopController.postCartDeleteProduct);
router.get('/products/:productId', shopController.getProduct);   //:productId says to express that the value will be passed

router.post('/cart', shopController.postCart);
module.exports = router;
