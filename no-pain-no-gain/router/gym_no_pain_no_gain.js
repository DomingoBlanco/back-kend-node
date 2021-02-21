const { Router } = require('express');

const {
    usuariosGet,
    usuariosPost,
    ciudadesPost,
    sedePost,
    clienteSedeGet,
    allUsuarios,
    allSedes,
    allCiudades
} = require('../controllers/controller_api');

const router = Router();


router.get('/', usuariosGet);

router.get('/consultaclienteporsede/', clienteSedeGet);

router.get('/allUsuarios/', allUsuarios);

router.get('/allSedes/', allSedes);

router.get('/allCiudades/', allCiudades);

router.post('/', usuariosPost);

router.post('/ciudad/', ciudadesPost);

router.post('/sede/', sedePost);



module.exports = router;