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
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email',
    },
    unique: true,
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
    type: Number,
    required: [true, 'Please provide phone number'],
    maxlength: 14,
    minlength: 14
  },
  month: {
    type: String,
    enum: ['--', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    default: '--',
    required: [true, 'Please provide month'],
  },
  day: {
    type: String,
    required: [true, 'Please provide valid day'],
    enum: ['--', '01', '02', '03', '04', '05', '06', '07'],
    default: '--', 
  },
  year: {
    type: String,
    enum: ['--', '1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014'],
    required: [true, 'Please provide a valid year'],
    default: '--',
  
  }, 
  gender: {
    type: String,
    required: [true, 'Please provide gender'],
    enum: ['--', 'Male', 'Female'],
    default: '--'
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
