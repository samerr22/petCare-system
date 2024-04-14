import  express  from "express";
import { NotifiCreate, NotififormCreate, deletenotifi, deletenotifiform, getcurentform, notififormget, notifiget, updateform, updatesnotifi} from "../controllers/Volunteer.controller.js";

const router = express.Router();

router.post('/createN',  NotifiCreate);
router.get('/getN', notifiget);
router.put('/updatesN/:notifiId', updatesnotifi);
router.delete('/deletesN/:NotifiId',deletenotifi);
router.post('/createformN',  NotififormCreate);
router.get('/getform', notififormget);
router.get('/getfomn/:currentuserId', getcurentform);
router.put('/updateFormm/:formId', updateform);
router.delete('/deletesNform/:notiFormId',deletenotifiform);



export default router;