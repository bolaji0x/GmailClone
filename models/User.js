const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please provide first name'],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Please provide last name'],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  username: {
    type: String,
    required: [true, 'Please provide username'],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 8,
    select: false,
  },
  phoneNo: {
    type: String,
    required: [true, 'Please provide phone number'],
    maxlength: 14,
    minlength: 14
  },
  month: {
    type: String,
    enum: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],
    required: [true, 'Please provide month'],
  },
  day: {
    type: Number,
    required: [true, 'Please provide day'],
    minlength: 2,
    maxlength: 2
  },
  year: {
    type: Number,
    required: [true, 'Please provide year'],
    minlength: 4,
    maxlength: 4
  },
  gender: {
    type: String,
    required: [true, 'Please provide gender'],
    enum: ['male', 'female']
  },
  location: {
    type: String,
    trim: true,
    maxlength: 20,
    default: 'my city',
  },
})

UserSchema.pre('save', async function () {
  // console.log(this.modifiedPaths())
  if (!this.isModified('password')) return
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  })
}

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password)
  return isMatch
}

module.exports = mongoose.model('User', UserSchema)
