const { Router } = require('express');

const {
    usuariosGet,
    usuariosPost,
    ciudadesPost,
    sedePost,
    clienteSedeGet
} = require('../controllers/controller_api');

const router = Router();


router.get('/', usuariosGet);

router.get('/consultaclienteporsede/', clienteSedeGet);

router.post('/', usuariosPost);

router.post('/ciudad/', ciudadesPost);

router.post('/sede/', sedePost);



module.exports = router;