import express from 'express';
import { deleteUser, signout, test, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/VerfiyUser.js';

const router = express.Router();


router.get('/test', test); 
router.put( '/update/:userId', updateUser);
router.delete('/delete/:userId', deleteUser);
router.post('/signout', signout);


export default router;