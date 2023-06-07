const express = require('express');
const usercontroller = require('./controller/usercontroller');
const router = express.Router();

const UserController = require('./controller/usercontroller');
const loginUser = require('./login');
const registerUser = require('./register');

router.get('/ping', (req, res) => {
    res.json({ ok: true });
});

router.get('/states', UserController.getStates);

//implementar rota privada
router.get('/user', usercontroller.getinfo);
router.put('/user', validadorController.eidtinfo, usercontroller.eidtinfo);

module.exports = router;