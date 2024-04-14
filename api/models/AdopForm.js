import mongoose from 'mongoose';


const formSchema = new mongoose.Schema({
  
  

    currentuserId: {
        type: String,
        required: true
      },

  name: {
    type: String,
    required: true
  },
  image: {
    type: String, 
    required: true
  },
  color: {
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
  price: {
    type: Number,
    required: true
  },
  Name: {
    type: String,
    required: true
  },
  Address: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },

  status: {
    type: String,
    enum: ['active', 'inactive'], 
    default: 'active' 
  }



  

  
});


const form = mongoose.model('form', formSchema);

export default  form;