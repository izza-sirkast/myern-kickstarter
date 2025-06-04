const express = require('express');
const dotenv = require('dotenv');
dotenv.config();


// ============================= Routers ===============================
const userRouter = require('./routers/UserRouter');


const app = express();
app.use(express.json());

app.use('/users', userRouter);
app.get('/', (req, res) => {
    res.status(200).json("Welcome to myern kickstarter");
})

app.listen(process.env.PORT, () => {
    console.log(`Server run on : http://localhost:${process.env.PORT}`)
})