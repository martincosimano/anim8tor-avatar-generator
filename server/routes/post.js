const express = require("express");
const router = express.Router();
const postController = require("../controllers/post")

router.get("/avatars", postController.getAllAvatars);
router.post("/addAvatar", postController.postAvatar);

module.exports = router;