const mongoose = require("mongoose");

const AvatarSchema = new mongoose.Schema({
    avatarName: { type: String, unique: true, required: true},
    likes: { type: Number, required: true }
});

const Avatar = mongoose.model("Avatar", AvatarSchema)

module.exports = Avatar;