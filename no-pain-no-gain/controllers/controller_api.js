const { response, request } = require('express');
const mysql = require('mysql');



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



const usuariosGet = (req = request, res = response) => {


    const { usuario, password } = req.query;


    connection.query(process.env.CONSULTA_USUARIO_LOGUEADO, [usuario, password], function(err, rows, fields) {

        if (rows.length < 1) {
            res.status(400).json({
                msg: 'get API no se encontro registro ocurrio algun error en la BD',
                usuario: usuario,
                password: password
            });

        }

        if (err) {
            res.status(400).json({
                msg: 'get API no se encontro registro ocurrio algun error en la BD',
                usuario: usuario,
                password: password
            });

        } else {
            if (rows[0].id_rol === 1) {
                res.status(400).json({
                    msg: 'Los usurios con perfil de cliente no es necesario que realicen el login'
                });

            } else {

                for (var i = 0; i < rows.length; i++)

                    res.status(200).json({
                    msg: 'get API - controlador',
                    nombre: rows[i].nombre,
                    apellido: rows[i].apellido,
                    cedula: rows[i].cedula,
                    correo: rows[i].correo,
                    rol: rows[i].descripcion_rol
                });

            }


        }


    });

}


const usuariosPost = (req = request, res = response) => {

    const { rol, correo, nombre, apellido, cedula, usuario, password, idSede } = req.body;


    connection.query(process.env.EXISTE_USUARIO, [correo, usuario, cedula], function(err, rows, fields) {

        if (rows.length < 1) {

            connection.query(process.env.INSERT_USUARIO, [rol, correo, nombre, apellido, cedula, usuario, password], function(err, rows, fields) {

                if (rows.length < 1) {
                    res.status(400).json({
                        msg: 'get API no se encontro registro ocurrio algun error en la BD',
                        usuario: usuario,
                        password: password
                    });

                }

                if (err) {
                    res.status(400).json({
                        msg: 'get API no se encontro registro ocurrio algun error en la BD',
                        usuario: usuario,
                        password: password
                    });

                } else {


                    res.status(200).json({
                        msg: 'POST API - Usuario Creado',
                        nombre: nombre,
                        apellido: apellido,
                        cedula: cedula,
                        correo: correo,
                        rol: rol
                    });

                }


            });

            //si el usuario es un cliente lo relacionamos con la sede y la ciudad
            if (rol === 1) {

                connection.query(process.env.INSERT_CLIENTE_SEDE, [idSede, cedula], function(error, row, field) {

                    console.log('cliente relacionado con la sede');

                });

            }

        } else {
            res.status(400).json({
                msg: 'No se registro el usuario ya existe en la base de datos',
                usuario: usuario,
                correo: correo,
                cedula: cedula
            });

        }


    });

}


const ciudadesPost = (req = request, res = response) => {

    const { ciudad } = req.body;


    connection.query(process.env.INSERT_CIUDAD, [ciudad], function(err, rows, fields) {

        if (rows.length < 1) {
            res.status(400).json({
                msg: 'post API no registro ocurrio algun error en la BD',
                ciudad: ciudad
            });

        }

        if (err) {
            res.status(400).json({
                msg: 'get API no se registro ocurrio algun error en la BD',
                ciudad: ciuda
            });

        } else {

            res.status(200).json({
                msg: 'POST API - Ciudad Creada',
                ciudad: ciudad
            });

        }


    });


}


const sedePost = (req = request, res = response) => {

    const { ciudad, nit, nombreSede, direccion } = req.body;


    connection.query(process.env.INSERT_SEDE, [ciudad, nit, nombreSede, direccion], function(err, rows, fields) {

        if (rows.length < 1) {
            res.status(400).json({
                msg: 'post API no registro ocurrio algun error en la BD',
                sede: nombreSede
            });

        }

        if (err) {
            res.status(400).json({
                msg: 'post API no se registro ocurrio algun error en la BD',
                sede: nombreSede
            });

        } else {

            res.status(200).json({
                msg: 'POST API - sede Creada',
                sede: nombreSede
            });

        }


    });


}


const clienteSedeGet = (req = request, res = response) => {


    const { idSede, idCiudad } = req.query;

    connection.query(process.env.CONSULTA_CLIENTE_SEDE, [idSede, idCiudad], function(err, rows, fields) {

        if (rows.length < 1) {
            res.status(400).json({
                msg: 'get API no se encontro registro con los datos enviados',
                idsede: idSede,
                idciudad: idCiudad
            });

        }

        if (err) {
            res.status(400).json({
                msg: 'get API no se encontro registro ocurrio algun error en la BD',
                idsede: idSede,
                idciudad: idCiudad
            });

        } else {
            for (var i = 0; i < rows.length; i++)

                res.status(200).json({
                msg: 'get API - controlador',
                nombre: rows[i].nombre,
                apellido: rows[i].apellido,
                cedula: rows[i].cedula,
                correo: rows[i].correo,
                rol: rows[i].descripcion_rol,
                sede: rows[i].descripcion_sede,
                ciudad: rows[i].descripcion_ciudad,
                direccion: rows[i].direccion

            });

        }


    });

}




module.exports = {
    usuariosGet,
    usuariosPost,
    ciudadesPost,
    sedePost,
    clienteSedeGet
}