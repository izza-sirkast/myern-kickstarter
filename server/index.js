const express = require('express');
const dotenv = require('dotenv');
dotenv.config();


// ============================= middlewares ===============================
const app = express();
app.use(express.json());


// ============================= routers ===============================
const userRouter = require('./routers/UserRouter');

app.use('/users', userRouter);
app.get('/', (req, res) => {
    res.status(200).json("Welcome");
})


app.listen(process.env.PORT, () => {
    console.log(`Server run on : http://localhost:${process.env.PORT}`)
})