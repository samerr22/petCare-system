import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    },
    adopter: {
      type: Boolean,
      default: false,
    },
    shelterowner: {
      type: Boolean,
      default: false,
    },
    eventmanger: {
      type: Boolean,
      default: false,
    },
    volunteer: {
      type: Boolean,
      default: false,
    },
    adoptonmanger: {
      type: Boolean,
      default: false,
    },
    vetdoctor: {
      type: Boolean,
      default: false,
    },
    shelterAdministor: {
      type: Boolean,
      default: false,
    },
    
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;