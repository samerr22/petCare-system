import mongoose from 'mongoose';


const VformSchema = new mongoose.Schema({
  
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
  Name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  
  

  
});


const Vform = mongoose.model('Vform', VformSchema);

export default  Vform;