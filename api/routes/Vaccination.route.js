import  express  from "express";
import { appoimentCreate, appoimentget, deleteschdul, getcurentappoiment, schdulCreate, schdulget, updateStatusss,  updateschdul } from "../controllers/Vaccination.controller.js";

const router = express.Router();

router.post('/createS',  schdulCreate);
router.get('/getS', schdulget);
router.put('/updates/:schdulId', updateschdul);
router.delete('/deletes/:SchdulId',deleteschdul);
router.post('/createA',  appoimentCreate);
router.get('/getA', appoimentget);
router.get('/getAa/:currentuserId', getcurentappoiment);
router.put('/vacci/:FormmId/status', updateStatusss);//check this 



export default router;