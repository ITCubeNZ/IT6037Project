const { Router } = require("express");
const authController = require("../controller/authController");
const router = Router();

router.get('/', authController.index_get);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.get('/register', authController.register_get);
router.post('/register', authController.register_post);
router.get('/search', authController.search_get);

module.exports = router;