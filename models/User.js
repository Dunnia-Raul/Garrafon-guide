const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, unique: true, required: true},
  password: String,
  date: {type: Date,required: true},
  typeDrink: String,
  email: {type: String, unique: true, required: true},
  city: String,
  role: {type: String, enum: ["user","admin"],default: "user"}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
