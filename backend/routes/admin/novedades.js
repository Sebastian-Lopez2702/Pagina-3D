var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel.js');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);

router.get('/', async function (req, res, next) {

    var novedades = await novedadesModel.getNovedades();

    novedades = novedades.map(novedad => {
        if (novedad.img_id) {
            const imagen = cloudinary.image(novedad.img_id, {
                width: 100,
                height: 100,
                crop: 'pad'
            });
            return {
                ...novedad,
                imagen
            }
        } else {
            return {
                ...novedad,
                imagen: ''
            }
        }
    });

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
});

router.post('/agregar', async (req, res, next) => {
    try {

        var img_id = '';
        if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }

        if (req.body.titulo != "" && req.body.cuerpo != "") {
            await novedadesModel.insertNovedad({
                ...req.body,
                img_id
            });

            res.redirect('/admin/novedades');
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'Los campos Titulo y Cuerpo son obligatorios'
            })
        }
    } catch (error) {
        console.log(error);
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se cargo la novedad'
        })
    }
});

router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;

    await novedadesModel.deleteNovedadById(id);
    res.redirect('/admin/novedades');
})

router.get('/modificar/:id', async (req, res, next) => {
    var id = req.params.id;

    var novedad = await novedadesModel.getNovedadById(id);

    res.render('admin/modificar', {
        layout: 'admin/layout',
        novedad
    })
});

router.post('/modificar', async (req, res, next) => {
    try {

        var id = req.body.id;

        var obj = {
            titulo: req.body.titulo,
            cuerpo: req.body.cuerpo,
        }

        await novedadesModel.changeNovedadById(obj, id);

        res.redirect('/admin/novedades');

    } catch (error) {
        console.log(error);
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se modifico la novedad'
        })
    }
});

module.exports = router;