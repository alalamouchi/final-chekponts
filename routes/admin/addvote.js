const Vote = require("../../models/Vote");

module.exports = async (req, res) => {
  try {
    let { Title } = req.body;
    const newVote = new Vote({
      Title,
    });
    await newVote.save();
    res.status(200).json({
      status: true,
      message: "vote was added successfully",
    });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ status: false, error });
  }
};
