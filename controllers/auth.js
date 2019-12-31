const User = require('../models/user');

exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
                path: '/login',
                pageTitle: 'Login',
                isAuthenticated: false
            });
};

exports.postLogin = (req, res, next) => {
    User.findById('5e0540e7a1e4e60f5d629673')
        .then(user =>{
            req.session.user = user;
            req.session.isLoggedIn = true;
            res.redirect('/');
        })
        .catch(err => console.log(err))
};