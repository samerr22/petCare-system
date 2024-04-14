
import EventForm from "../models/EventForm.js";
import Eventt from "../models/Event.js";




//event
export const eventCreate = async (req, res, next) => {
    

  const {  title, image, desc} = req.body;
  
    const newEvent = new Eventt({
   
      title,
      image,
      desc,
      
     
    });
    try {
      const savedEvent = await newEvent.save();
      res.status(201).json(savedEvent);
    } catch (error) {
      next(error);
    }
  
   
  };



  export const eventget = async (req, res, next) => {
    try {
      
  
      
  
        const event = await Eventt.find();
  
        if (event.length > 0) {
          res.json({
            message: "event  details retrieved successfully",
            event,
          });
        } else {
          return next(errorHandle(404, " Cat not fonud "));
        }
     
    } catch (error) {
      console.log(error.message);
  
      next(error);
    }
  };



  export const updatesevent = async (req, res, next) => {
    
    try {
      const updatevent = await Eventt.findByIdAndUpdate(
        req.params.eventId,
        {
          $set: {
           
            title: req.body.title,
            image: req.body.image,
            desc: req.body.desc,
            
            
          },
        },
        { new: true }
      );
      res.status(200).json(updatevent);
    } catch (error) {
      next(error);
    }
  };




  export const deletesevent = async (req, res, next) => {
   
    try {
      await Eventt.findByIdAndDelete(req.params.EventId);
      res.status(200).json("The event has been deleted");
    } catch (error) {
      next(error);
    }
  };


  //form create

  export const FormECreate = async (req, res, next) => {
    
  
    const {   title,image,desc,name,email,phone} = req.body;
  
    const newsEForm = new EventForm({
   
        title,
        image,
        desc,
        name,
        email,
        phone
      
     
    });
    try {
      const savedEform = await  newsEForm.save();
      res.status(201).json(savedEform);
    } catch (error) {
      next(error);
    }
  };



  export const FormEget = async (req, res, next) => {
    try {
      
  
      
  
        const Eventform = await EventForm.find();
  
        if (Eventform.length > 0) {
          res.json({
            message: "Eventform  details retrieved successfully",
            Eventform,
          });
        } else {
          return next(errorHandle(404, " Cat not fonud "));
        }
     
    } catch (error) {
      console.log(error.message);
  
      next(error);
    }
  };


 

  







  