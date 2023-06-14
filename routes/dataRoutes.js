const { Router } = require("express");
const dataController = require("../controller/dataController");
const router = Router();

router.post('/search', dataController.search_post);
router.post('/add', dataController.add_post);
router.post('/modify', dataController.modify_post);

module.exports = router;