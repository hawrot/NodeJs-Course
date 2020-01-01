const User = require('../models/user');

const bcrypt = require('bcryptjs');

exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: false
    });
};

exports.getSignup = (req, res, next) => {
    res.render('auth/signup', {
        path: '/signup',
        pageTitle: 'Signup',
        isAuthenticated: false
    });
};

exports.postLogin = (req, res, next) => {
    User.findById('5e0540e7a1e4e60f5d629673')
        .then(user =>{
            req.session.user = user;
            req.session.isLoggedIn = true;
            req.session.save( err =>{
                console.log(err);
                res.redirect('/');
            })
        })
        .catch(err => console.log(err))
};
exports.postLogout = (req, res, next) => {
    req.session.destroy(err =>{
        console.log(err);
        res.redirect('/');
    })
};
exports.postSignup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
   // const confirmPassword = req.body.confirmPassword;

    User.findOne({email: email}).then(userDoc =>{
        if(userDoc){
            return res.redirect('/signup');
        }
        const user = new User({
            email: email,
            password: password,
            cart : {items: []}
        });
        return user.save();
    }).then(result =>{
      res.redirect('/login');
    })
        .catch(err =>{
        console.log(err);
    });

};

exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
        console.log(err);
        res.redirect('/');
    });
};