const User = require("../../models/User");
module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    await User.findByIdAndUpdate(id, {
      $set: {
        isBanned: true,
      },
    });
    res.status(200).json({
      status: true,
      message: "User was banned successfully",
    });
  } catch (error) {
    if (error) throw error;
    res.status(403).json({ status: false, error });
  }
};
