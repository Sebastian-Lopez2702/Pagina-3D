const generateContactEmail = ({ nombre, apellido, email, telefono, descripcion }) => `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
            overflow: hidden;
            border: 1px solid #e0e0e0;
        }
        .header {
            background-color: #007BFF;
            color: #ffffff;
            padding: 15px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 20px;
            color: #333333;
            line-height: 1.6;
        }
        .content p {
            margin: 10px 0;
        }
        .content .highlight {
            font-weight: bold;
            color: #007BFF;
        }
        .footer {
            background: #f1f1f1;
            color: #555555;
            padding: 15px 20px;
            text-align: center;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>Nuevo Contacto desde la Web</h1>
        </div>
            <div class="content">
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Apellido:</strong> ${apellido}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Descripción:</strong> ${descripcion}</p>
        </div>
        <div class="footer">
            <p>Este mensaje fue enviado por un usuario desde tu sitio web.</p>
        </div>
    </div>
</body>
</html>
`;

module.exports = {
    generateContactEmail,
};