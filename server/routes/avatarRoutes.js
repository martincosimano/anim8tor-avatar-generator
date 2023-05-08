const express = require("express");
const router = express.Router();
const avatarController = require("../controllers/avatarController");
const cors = require("cors");

router.use(cors());

router.get("/getAllAvatars", avatarController.getAllAvatars);
router.post("/addAvatar", avatarController.addAvatar);
router.put("/likeAvatar/:id", avatarController.likeAvatar)
router.delete("/deleteAvatar/:id", avatarController.deleteAvatar)

module.exports = router;