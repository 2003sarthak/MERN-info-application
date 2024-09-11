import User from "../models/UserModel.js";

export const GetUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};