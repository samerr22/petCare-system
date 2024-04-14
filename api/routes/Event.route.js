import  express  from "express";
import { FormECreate, FormEget, deletesevent, eventCreate, eventget, updatesevent } from "../controllers/Event.controller.js";

const router = express.Router();

router.post('/createE',  eventCreate);
router.get('/getE', eventget);
router.put('/updateE/:eventId', updatesevent);
router.delete('/deleteE/:EventId',deletesevent);
router.post('/createFE', FormECreate );
router.get('/getFE', FormEget);


export default router;  