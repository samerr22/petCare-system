import mongoose from 'mongoose';


const NotifSchema = new mongoose.Schema({
  
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
  
  

  
});


const Notif = mongoose.model('Notif', NotifSchema);

export default  Notif;