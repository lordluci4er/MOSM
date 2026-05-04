import { signupUser, loginUser } from "../services/authService.js";
import { generateToken } from "../utils/jwt.js";

export const signup = async (req, res) => {
  try {
    const user = await signupUser(req.body);
    const token = generateToken(user);

    res.json({ user, token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const user = await loginUser(req.body);
    const token = generateToken(user);

    res.json({ user, token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};