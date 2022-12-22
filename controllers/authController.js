const User = require('../models/User.js');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, UnAuthenticatedError } = require('../errors/index.js');
const attachCookie = require('../utils/attachCookie.js');

const register = async (req, res) => {
  const { firstName, lastName, username, password, phoneNo, month, day, year, gender } = req.body;

  if (!firstName || !lastName || !username || !password || !phoneNo || !day || !year || !gender) {
    throw new BadRequestError('please provide all values');
  }
  const userAlreadyExists = await User.findOne({ username });
  if (userAlreadyExists) {
    throw new BadRequestError('Email already in use');
  }
  const user = await User.create({ firstName, lastName, username, password, phoneNo, day, year, gender });

  const token = user.createJWT();
  attachCookie({ res, token });
  res.status(StatusCodes.CREATED).json({
    user: {
        firstName: user.firstName, 
        lastName: user.lastName, 
        username: user.username, 
        password: user.password, 
        phoneNo: user.phoneNo, 
        day: user.day, 
        year: user.year, 
        gender: user.gender 
    },

    location: user.location,
  });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequestError('Please provide all values');
  }
  const user = await User.findOne({ username }).select('+password');
  if (!user) {
    throw new UnAuthenticatedError('Invalid Credentials');
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError('Invalid Credentials');
  }
  const token = user.createJWT();
  attachCookie({ res, token });
  user.password = undefined;

  res.status(StatusCodes.OK).json({ user, location: user.location });
};

const updateUser = async (req, res) => {
    const { firstName, lastName, username, phoneNo, month, day, year, gender, location } = req.body;
    if (!firstName || !lastName || !username || !phoneNo || !month || !day || !year || !gender || !location) {
    throw new BadRequestError('Please provide all values');
    }
    const user = await User.findOne({ _id: req.user.userId });

    user.firstName = firstName ;
    user.lastName = lastName;
    user.username = username;  
    user.phoneNo = phoneNo
    user.month = month;
    user.day = day;  
    user.year = year;
    user.gender = gender; 
    user.location = location;
    await user.save();

    const token = user.createJWT();
    attachCookie({ res, token });

    res.status(StatusCodes.OK).json({ user, location: user.location });
};

const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  res.status(StatusCodes.OK).json({ user, location: user.location });
};

const logout = async (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now() + 1000),
  });
  res.status(StatusCodes.OK).json({ msg: 'user logged out!' });
};

module.exports = { register, login, updateUser, getCurrentUser, logout };
