import form from "../models/AdopForm.js";
import cat from "../models/Categorycat.js";
import dog from "../models/Categorydog.js";

//cat profil
export const CatCreate = async (req, res, next) => {
    
  
    const {  name, image, color,age,size,price} = req.body;
  
    const newcat = new cat({
   
      name,
      image,
      color,
      age,
      size,
      price
     
    });
    try {
      const savedcat = await newcat.save();
      res.status(201).json(savedcat);
    } catch (error) {
      next(error);
    }
  };



  export const Catget = async (req, res, next) => {
    try {
      
  
      
  
        const Cat = await cat.find();
  
        if (Cat.length > 0) {
          res.json({
            message: "Cat  details retrieved successfully",
            Cat,
          });
        } else {
          return next(errorHandle(404, " Cat not fonud "));
        }
     
    } catch (error) {
      console.log(error.message);
  
      next(error);
    }
  };



  export const updatecat = async (req, res, next) => {
    
    try {
      const updateCat = await cat.findByIdAndUpdate(
        req.params.catId,
        {
          $set: {
           
            name: req.body.name,
            image: req.body.image,
            color: req.body.color,
            age: req.body.age,
            size: req.body.size,
            price: req.body.pice,
          
          },
        },
        { new: true }
      );
      res.status(200).json(updateCat);
    } catch (error) {
      next(error);
    }
  };




  export const deletecat = async (req, res, next) => {
   
    try {
      await cat.findByIdAndDelete(req.params.CatId);
      res.status(200).json("The cat has been deleted");
    } catch (error) {
      next(error);
    }
  };

//dog 
  export const dogCreate = async (req, res, next) => {
    
  
    const {  name, image, color,age,size,price} = req.body;
  
    const newdog = new dog({
   
      name,
      image,
      color,
      age,
      size,
      price
     
    });
    try {
      const saveddog = await newdog.save();
      res.status(201).json(saveddog);
    } catch (error) {
      next(error);
    }
  };



  export const dogget = async (req, res, next) => {
    try {
      
  
      
  
        const Dog = await dog.find();
  
        if (Dog.length > 0) {
          res.json({
            message: "Cat  details retrieved successfully",
            Dog,
          });
        } else {
          return next(errorHandle(404, " Cat not fonud "));
        }
     
    } catch (error) {
      console.log(error.message);
  
      next(error);
    }
  };



  export const updatedog = async (req, res, next) => {
    
    try {
      const updateDog = await dog.findByIdAndUpdate(
        req.params.dogId,
        {
          $set: {
           
            name: req.body.name,
            image: req.body.image,
            color: req.body.color,
            age: req.body.age,
            size: req.body.size,
            price: req.body.pice,
          
          },
        },
        { new: true }
      );
      res.status(200).json(updateDog);
    } catch (error) {
      next(error);
    }
  };




  export const deletedog = async (req, res, next) => {
   
    try {
      await dog.findByIdAndDelete(req.params.DogId);
      res.status(200).json("The cat has been deleted");
    } catch (error) {
      next(error);
    }
  };


  //,reate form 
  export const formCreate = async (req, res, next) => {
    
  
    const { currentuserId, name, image, color,age,size,price,Name, Address, contact,status} = req.body;
  
    const newForm = new form({
      
      currentuserId, 
      name,
      image,
      color,
      age,
      size,
      price,
      Name,
      Address,
      contact,
      status
     
    });
    try {
      const savedform = await newForm .save();
      res.status(201).json(savedform);
    } catch (error) {
      next(error);
    }
  };


  //current user fil form get 
  export const getcurentform = async (req, res, next) => {
    try {
      const currentuserId = req.params.currentuserId; 
      
      
      const Form = await form.find({ currentuserId });
  
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

//get all form
export const formget = async (req, res, next) => {
  try {
    

    

      const Form = await form.find();

      if (Form.length > 0) {
        res.json({
          message: "Cat  details retrieved successfully",
          Form,
        });
      } else {
        return next(errorHandle(404, " Cat not fonud "));
      }
   
  } catch (error) {
    console.log(error.message);

    next(error);
  }
};

//updateform
export const updateform = async (req, res, next) => {
    
  try {
    const updateform = await form.findByIdAndUpdate(
      req.params.formId,
      {
        $set: {
        
          Name: req.body.Name,
          Address: req.body.Address,
          contact: req.body.contact,
         
        },
      },
      { new: true }
    );
    res.status(200).json(updateform);
  } catch (error) {
    next(error);
  }
};

//deleteform
export const deleteform = async (req, res, next) => {
 
  try {
    await form.findByIdAndDelete(req.params.FormId);
    res.status(200).json("The form has been deleted");
  } catch (error) {
    next(error);
  }
};


//status chage approve or reject
//status 
export const updateStatus = async (req, res, next) => {
  try {
    

    const { FormId } = req.params;
    const { status } = req.body;

    const updatedform = await form.findByIdAndUpdate(
      FormId ,
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


