import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoutes from './routes/userRoutes.js'
import exploreRoutes from './routes/exploreRoutes.js'


dotenv.config()

const app = express();
app.use(cors())

app.get('/',(req, res) => {
    res.send("server is running...!")
} );

app.use('/api/users', userRoutes);
app.use('/api/explore', exploreRoutes);

app.listen(5000, () => {
    console.log("Server running at PORT: 5000")
})
