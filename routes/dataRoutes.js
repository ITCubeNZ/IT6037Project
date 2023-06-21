const { Router } = require("express");
const dataController = require("../controller/dataController");
const router = Router();

router.post('/add', dataController.add_post);
router.post('/modify', dataController.modify_post);
router.post('/delete', dataController.delete_post);

module.exports = router;