import mongoose from 'mongoose';


const schdulSchema = new mongoose.Schema({
  
  cetogr: {
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

  

  
});


const schdul = mongoose.model('schdul', schdulSchema);

export default  schdul;
