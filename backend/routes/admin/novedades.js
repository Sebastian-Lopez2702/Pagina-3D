var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel.js');

router.get('/', async function (req, res, next) {

    var novedades = await novedadesModel.getNovedades();

    res.render('admin/novedades', {
        layout: 'admin/layout',
        user: req.session.user,
        novedades
    });
});

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    })
})

module.exports = router;