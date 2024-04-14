import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import UserRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import AdopRoute from './routes/Adoption.route.js';
import VaccinationRoute from './routes/Vaccination.route.js';
import VolunteerRoute from './routes/Volunteer.route.js';
import EventRoute from './routes/Event.route.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('is commd');
})
.catch((err) => {
    console.log(err);
})
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})



app.use('/api/user', UserRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/adop', AdopRoute);
app.use('/api/vicca', VaccinationRoute);
app.use('/api/volunt', VolunteerRoute);
app.use('/api/event', EventRoute);



app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})
 