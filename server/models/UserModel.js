const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 60,
  },
  surname: {
    type: String,
    required: true,
    maxlength: 60,
  },
  dateOfBirthday: {
    type: Date,
    required: true,
  },
  phone: {
    type: String,
    unique: false,
    required: true,
    maxlength: 10,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.plugin(mongoosePaginate);

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;
