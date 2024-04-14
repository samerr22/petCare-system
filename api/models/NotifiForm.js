import mongoose from 'mongoose';


const NotifFFSchema = new mongoose.Schema({
  

    currentuserId: {
        type: String,
        required: true
      },
  title: {
    type: String,
    required: true
  },
  location: {
    type: String, 
    required: true
  },
  skill: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  
  
  

  
});


const Notiform = mongoose.model('Notiform', NotifFFSchema);

export default  Notiform;