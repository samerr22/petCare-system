import mongoose from 'mongoose';


const appoimnetSchema = new mongoose.Schema({
  

    currentuserId: {
        type: String,
        required: true
      },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  
  status: {
    type: String,
    enum: ['processing', 'approval', 'reject'], 
    default: 'processing' 
}
  

  
});


const appoimnet = mongoose.model('appoimnet', appoimnetSchema);

export default  appoimnet;
