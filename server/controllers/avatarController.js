const Avatar = require("../models/avatarModel");

const getAllAvatars = async(req,res) => {
    try {
        const avatars = await Avatar.find();
        res.json(avatars);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

const addAvatar = async (req, res) => {
    const { avatarName, avatarSrc } = req.body;
    try {
      const avatar = new Avatar({ 
        avatarName: avatarName, 
        avatarSrc: avatarSrc,
        likes: 0 
      });
      await avatar.save();
      res.status(200).json({ message: 'Avatar saved successfully' });
    } catch (error) {
      res.status(500).send(error);
    }
};

const likeAvatar = async (req, res) => {
    const { id } = req.params;
    try {
      const updatedAvatar = await Avatar.findByIdAndUpdate(
        id,
        { $inc: { likes: 1 } },
        { new: true }
      );
      res.status(200).json(updatedAvatar);
    } catch (error) {
      res.status(500).send(error);
    }
};

const deleteAvatar = async (req, res) => {
    const { id } = req.params;
    try {
        const avatar = await Avatar.findById(id);
        await avatar.deleteOne();
        res.status(200).json({ message: 'Avatar deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
};


module.exports = { getAllAvatars, addAvatar, likeAvatar, deleteAvatar }