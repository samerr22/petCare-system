import  express  from "express";
import { CatCreate, Catget, deletecat, deletedog, deleteform, dogCreate, dogget, formCreate, formget, getcurentform, updateStatus, updatecat, updatedog, updateform } from "../controllers/Adoption.controller.js";

const router = express.Router();

router.post('/createC',  CatCreate);
router.get('/getcat', Catget);
router.put('/updatecat/:catId', updatecat);
router.delete('/deletec/:CatId',deletecat);
router.post('/dogadd',  dogCreate);
router.get('/getdog', dogget);
router.put('/updatedog/:dogId', updatedog);
router.delete('/deletedog/:DogId',deletedog);
router.post('/createf',  formCreate);
router.get('/getform/:currentuserId', getcurentform);
router.get('/getform', formget);
router.put('/updateform/:formId', updateform);
router.delete('/delete/:FormId',deleteform);
router.put('/adopp/:FormId/status', updateStatus);//check this 



export default router;