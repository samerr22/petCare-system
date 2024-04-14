import mongoose from 'mongoose';


const  EventForSchema = new mongoose.Schema({
  

    
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  desc: {
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


const EventForm = mongoose.model('EventForm', EventForSchema);

export default  EventForm;
