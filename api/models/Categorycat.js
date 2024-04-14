import mongoose from 'mongoose';


const catSchema = new mongoose.Schema({
  
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
  

  
});


const cat = mongoose.model('cat', catSchema);

export default  cat;
