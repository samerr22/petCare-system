import appoimnet from "../models/Appoiment.js";
import schdul from "../models/Schedul.js";




//schdul curd opration 
export const schdulCreate = async (req, res, next) => {
    
  
    const {  cetogr, date,time,phone} = req.body;
  
    const newschdul = new schdul({
   
     cetogr,
     date,
     time,
     phone
     
    });
    try {
      const savedschdul = await newschdul.save();
      res.status(201).json(savedschdul);
    } catch (error) {
      next(error);
    }
  };



  export const schdulget = async (req, res, next) => {
    try {
      
  
      
  
        const Schdul = await schdul.find();
  
        if (Schdul.length > 0) {
          res.json({
            message: "Schdul  details retrieved successfully",
            Schdul,
          });
        } else {
          return next(errorHandle(404, " Cat not fonud "));
        }
     
    } catch (error) {
      console.log(error.message);
  
      next(error);
    }
  };



  export const updateschdul = async (req, res, next) => {
    
    try {
      const updateschdul = await schdul.findByIdAndUpdate(
        req.params.schdulId,
        {
          $set: {
           
            cetogr: req.body.cetogr,
            date: req.body.date,
            time: req.body.time,
            phone: req.body.phone,
            
          },
        },
        { new: true }
      );
      res.status(200).json(updateschdul);
    } catch (error) {
      next(error);
    }
  };




  export const deleteschdul = async (req, res, next) => {
   
    try {
      await schdul.findByIdAndDelete(req.params.SchdulId);
      res.status(200).json("The schdul has been deleted");
    } catch (error) {
      next(error);
    }
  };


  //appoiment create

  export const appoimentCreate = async (req, res, next) => {
    
  
    const { currentuserId,  name,age,size,date,time,phone,status} = req.body;
  
    const newsappoimnet = new appoimnet({
      currentuserId,
       name,
       age,
       size,
      date,
      time,
      phone,
      status
      
     
    });
    try {
      const savedappoimnet = await  newsappoimnet.save();
      res.status(201).json(savedappoimnet);
    } catch (error) {
      next(error);
    }
  };



  export const appoimentget = async (req, res, next) => {
    try {
      
  
      
  
        const appoiment = await appoimnet.find();
  
        if (appoiment.length > 0) {
          res.json({
            message: "appoiment  details retrieved successfully",
            appoiment,
          });
        } else {
          return next(errorHandle(404, " Cat not fonud "));
        }
     
    } catch (error) {
      console.log(error.message);
  
      next(error);
    }
  };


  export const getcurentappoiment = async (req, res, next) => {
    try {
      const currentuserId = req.params.currentuserId; 
      
      
      const Appoimnet = await appoimnet.find({currentuserId });
  
      if (Appoimnet.length > 0) {
        res.json({ message: "appoimnet details retrieved successfully", Appoimnet});
      } else {
        return next(error(404, " not found"));
      }
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  };

  //status chage approve or reject
//status 
export const updateStatusss = async (req, res, next) => {
  try {
    

    const { FormmId } = req.params;
    const { status } = req.body;

    const updatedform = await appoimnet.findByIdAndUpdate(
      FormmId ,
      { status },
      { new: true }
    );

    if (!updatedform) {
      return next(errorHandle(404, " form not found"));
    }

    res.status(200).json(updatedform);
  } catch (error) {
    next(error);
  }
};







  