const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');


// ============================= middlewares ===============================
const app = express();
app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true
}))


// ============================= routers ===============================
const userRouter = require('./routers/UserRouter');

app.use('/users', userRouter);
app.get('/', (req, res) => {
    res.status(200).json("Welcome");
})


app.listen(process.env.PORT, () => {
    console.log(`Server run on : http://localhost:${process.env.PORT}`)
})