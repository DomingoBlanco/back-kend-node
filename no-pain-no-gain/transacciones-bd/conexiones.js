/*const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'no_pain_no_gains',
    port: 3306
});
connection.connect(function(error) {
    if (error) {
        throw error;
    } else {
        console.log('Conexion correcta.');
    }
});


const query = connection.query('SELECT nombre, apellido, cedula, correo FROM tbl_usuario WHERE usuario = ? and password = ?', [1, 3], function(error, result) {
    if (error) {
        throw error;
    } else {
        var resultado = result;
        if (resultado.length > 0) {
            console.log(resultado[0].nombre + ' - ' + resultado[0].apellido + ' - ' + resultado[0].correo + ' - ' + resultado[0].cedula);
        } else {
            console.log('Registro no encontrado');
        }
    }
});

connection.end();*/