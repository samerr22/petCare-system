import Notiform from "../models/NotifiForm.js";
import Notif from "../models/Notification.js";



//create notification 
export const NotifiCreate = async (req, res, next) => {
    
  
    const {  title, location,skill} = req.body;
  
    const newsnotifi = new Notif({
   
     title,
     location,
     skill
     
     
    });
    try {
      const savedsnotifi = await newsnotifi.save();
      res.status(201).json(savedsnotifi);
    } catch (error) {
      next(error);
    }
  };



  export const notifiget = async (req, res, next) => {
    try {
      
  
      
  
        const notifi = await Notif.find();
  
        if (notifi.length > 0) {
          res.json({
            message: "Notification  details retrieved successfully",
            notifi,
          });
        } else {
          return next(errorHandle(404, " Cat not fonud "));
        }
     
    } catch (error) {
      console.log(error.message);
  
      next(error);
    }
  };



  export const updatesnotifi = async (req, res, next) => {
    
    try {
      const updatesnotifi = await Notif.findByIdAndUpdate(
        req.params.notifiId,
        {
          $set: {
           
            title: req.body.title,
            location: req.body.location,
            skill: req.body.skill,
           
            
          },
        },
        { new: true }
      );
      res.status(200).json(updatesnotifi);
    } catch (error) {
      next(error);
    }
  };




  export const deletenotifi = async (req, res, next) => {
   
    try {
      await Notif.findByIdAndDelete(req.params.NotifiId);
      res.status(200).json("The Notifi has been deleted");
    } catch (error) {
      next(error);
    }
  };


  //NotifForm submit 
  export const NotififormCreate = async (req, res, next) => {
    
  
    const { currentuserId,  title, location,skill,name,email,phone} = req.body;
  
    const newsnotifiform = new Notiform({
     
      currentuserId,
     title,
     location,
     skill,
    name,
    email,
    phone
     
    });
    try {
      const savedsnotifiform = await newsnotifiform.save();
      res.status(201).json(savedsnotifiform);
    } catch (error) {
      next(error);
    }
  };


  //watch all form 
  export const notififormget = async (req, res, next) => {
    try {
      
  
      
  
        const notif = await Notiform.find();
  
        if (notif.length > 0) {
          res.json({
            message: "Notification form  details retrieved successfully",
            notif,
          });
        } else {
          return next(errorHandle(404, " Cat not fonud "));
        }
     
    } catch (error) {
      console.log(error.message);
  
      next(error);
    }
  };

  //voluteer get there form 
  export const getcurentform = async (req, res, next) => {
    try {
      const currentuserId = req.params.currentuserId; 
      
      
      const Form = await Notiform.find({ currentuserId });
  
      if (Form.length > 0) {
        res.json({ message: "animal details retrieved successfully", Form });
      } else {
        return next(error(404, " not found"));
      }
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  };


  export const updateform = async (req, res, next) => {
    
    try {
      const updates = await Notiform.findByIdAndUpdate(
        req.params.formId,
        {
          $set: {
           
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
           
            
          },
        },
        { new: true }
      );
      res.status(200).json(updates);
    } catch (error) {
      next(error);
    }
  };




  export const deletenotifiform = async (req, res, next) => {
   
    try {
      await Notiform.findByIdAndDelete(req.params.notiFormId);
      res.status(200).json("The Notifiform has been deleted");
    } catch (error) {
      next(error);
    }
  };

