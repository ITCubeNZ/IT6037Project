const { Router } = require("express");
const authController = require("../controller/authController");
const router = Router();

router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.get('/register', authController.register_get);
router.post('/register', authController.register_post);

module.exports = router;