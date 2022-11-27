const vote = require("../../models/vote");
const cloudinary = require("../../middlewares/cloudinary");
const fs = require("fs");
module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    const uploader = async (path) => await cloudinary.uploads(path, "uploads");
    if (req.files.length !== 0) {
      const urls = [];
      const files = req.files;
      for (const file of files) {
        const { path } = file;
        const newPath = await uploader(path);
        urls.push(newPath.url);
        fs.unlinkSync(path);
      }
      await vote.findByIdAndUpdate(
        id,
        {
          $set: { ...req.body, img: urls },
        },
        { new: true }
      );
      res.status(200).json({
        status: true,
        message: "vote was updated successfully",
      });
    } else {
      await vote.findByIdAndUpdate(
        id,
        {
          $set: { ...req.body },
        },
        { new: true }
      );
      res.status(200).json({
        status: true,
        message: "vote was updated successfully",
      });
    }
  } catch (error) {
    if (error) throw error;
    console.log(error);
  }
};
