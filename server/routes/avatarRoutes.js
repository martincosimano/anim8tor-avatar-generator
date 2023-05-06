const express = require("express");
const router = express.Router();
const avatarController = require("../controllers/avatarController")

router.get("/getAllAvatars", avatarController.getAllAvatars);
router.post("/addAvatar", avatarController.addAvatar);
// router.put("/addOneLike", avatarController.addOneLike)

module.exports = router;