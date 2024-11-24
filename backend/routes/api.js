var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');
var { generateContactEmail } = require('./../public/javascripts/generateContactEmail');

router.get('/novedades', async function (req, res, next) {
    let novedades = await novedadesModel.getNovedades();

    novedades = novedades.map(novedades => {
        if (novedades.img_id) {
            const imagen = cloudinary.url(novedades.img_id, {
                width: 800,
                height: 450,
                crop: 'fill'
            });

            return {
                ...novedades,
                imagen
            }

        } else {
            return {
                ...novedades,
                imagen: ''
            }
        }
    });

    res.json(novedades);

});

router.post('/contacto', async (req, res) => {

    const { nombre, apellido, email, telefono, descripcion } = req.body;
    const htmlContent = generateContactEmail({ nombre, apellido, email, telefono, descripcion });

    const mail = {
        to: 'proyecto.3d.contacto.mail@gmail.com',
        subject: 'Contacto web',
        html: htmlContent
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        mensaje: 'Mensaje enviado',
    });

});

module.exports = router;