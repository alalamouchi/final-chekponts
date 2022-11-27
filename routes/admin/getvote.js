const vote = require("../../models/Vote");
module.exports = async (req, res) => {
  try {
    let vote = await vote.find();
    res.status(200).json({ status: true, vote });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ status: false, error });
  }
};
