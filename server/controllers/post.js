const Avatar = require("../models/avatar");

const getAllAvatars = async(req,res) => {
    try {
        const avatars = await Avatar.find();
        res.json(avatars);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

const postAvatar = async(req, res) => {
    const { avatarName } = req.body;
    try {
        const avatar = new Avatar({ avatarName, likes: 0 });
        await avatar.save();
        res.status(200).send('Avatar saved successfully');
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = { getAllAvatars, postAvatar }