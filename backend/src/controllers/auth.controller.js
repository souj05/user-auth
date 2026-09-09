const jwt = require('jsonwebtoken');
const User = require('../models/User.model');

const signToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });

const sendToken = (user, status, res) => {
  const token = signToken(user._id);
  res.status(status).json({ success: true, token, user: { id: user._id, name: user.name, email: user.email, createdAt: user.createdAt } });
};

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (await User.findOne({ email })) return res.status(400).json({ message: 'Email already registered.' });
    const user = await User.create({ name, email, password });
    sendToken(user, 201, res);
  } catch (error) {
    if (error.name === 'ValidationError') return res.status(400).json({ message: Object.values(error.errors)[0].message });
    res.status(500).json({ message: 'Server error. Try again.' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'Please provide email and password.' });
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.comparePassword(password))) return res.status(401).json({ message: 'Invalid email or password.' });
    sendToken(user, 200, res);
  } catch (error) {
    res.status(500).json({ message: 'Server error. Try again.' });
  }
};

const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.status(200).json({ success: true, user: { id: user._id, name: user.name, email: user.email, createdAt: user.createdAt } });
  } catch (error) {
    res.status(500).json({ message: 'Server error.' });
  }
};

module.exports = { register, login, getMe };
