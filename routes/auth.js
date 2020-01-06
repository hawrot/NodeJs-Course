const express = require('express');
const { check, body  } = require('express-validator/check');

const authController = require('../controllers/auth');

const User = require('../models/user');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post('/login', authController.postLogin);

router.post('/signup',
    [
    check('email')
        .isEmail()
        .withMessage('Enter a valid email')
        .custom((value, {req}) =>{
             // if(value === 'test@test.com'){
             //    throw new Error('This email is not allowed')
             //  }
             // return true;
           return  User.findOne({ email: email })
                .then(userDoc => {
                    if (userDoc) {
                        return Promise.reject('Email exists in the database');

                }
        });
}),
    body('password', 'Please enter a password which is between 5 and 10 and contains numbers')
        .isLength({min: 5, max: 10})
        .isAlphanumeric(),
    body('confirmPassword').custom((value, {req}) =>{
        if (value !== req.body.password){
            throw new Error('Passwords need to match!');
        }
        return true;
    })

    ],
        authController.postSignup);

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

router.post('/rest', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

module.exports = router;