var express = require('express');
var router = express.Router();
var userModel = require('./../../models/userModel.js');

router.get('/', function (req, res, next) {
    res.render('admin/login', {
        layout: 'admin/layout',
    });
});

router.get('/logout', function (req, res, next) {
    req.session.destroy();
    res.render('admin/login', {
        layout: 'admin/layout',
    });
});

router.post('/', async (req, res, next) => {
    try {
        var user = req.body.user;
        var password = req.body.password;

        var data = await userModel.getUserByUserNameAndPassword(user, password);

        if (data != undefined) {
            req.session.id_user = data.id;
            req.session.user = data.user;
            res.redirect('/admin/novedades');
        } else {
            res.render('admin/login', {
                layout: 'admin/layout',
                error: true
            });
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;