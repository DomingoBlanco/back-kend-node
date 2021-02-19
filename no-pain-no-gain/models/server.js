const express = require('express')
var cors = require('cors')



class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        //middlewares
        this.middleware();
        //routes
        this.usuarioPath = '/api/gym';
        this.routes();

    }

    routes() {

        this.app.use(this.usuarioPath, require('../router/gym_no_pain_no_gain'))
    }

    middleware() {
        //para dar un poco de seguridad a la app
        this.app.use(cors());
        // Lectura y parseo del body
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }))
            //ruta pub;lica
        this.app.use(express.static('public'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${ this.port}`)
        })
    }


}

module.exports = Server