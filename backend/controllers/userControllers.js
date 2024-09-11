import User from "../models/UserModel.js";

const signupUser = async (req, res) => {
  try {
    const { name, email, username, password,bio } = req.body;
    const user = await User.findOne({ $or: [{ email }, { username }] });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }
    const newUser = new User({
      name,
      email,
      username,
      password,
      bio,
    });
    await newUser.save();
    if (newUser) {
      res.status(201).json(newUser);
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("error in signUp user", error.message);
  }
};
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || user?.password!==password)
      return res.status(400).json({ error: "Invaild username or password" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("error in loginUser", error.message);
  }
};
// const logoutUser = async (req, res) => {
//   try {
//     res.cookie("jwt", "", { maxAge: 1 });
//     res.status(200).json({ message: "User logged out successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//     console.log("error in logout User", error.message);
//   }
// };


export {
  signupUser,
  loginUser,
};
