const { Router } = require("express");
const dataController = require("../controller/dataController");
const router = Router();

router.post('/search', dataController.search_post);

module.exports = router;