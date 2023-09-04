require('dotenv').config();
const express = require('express');
// const app = express();
const port = process.env.APP_PORT;
const { connectDB } = require('./configs/db');
const app = express();
const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(cookieParser());
const AuthRouter = require('./Routers/RouteAuth');
const UserRouter = require('./Routers/RouteUser');
app.use('/api/v1', AuthRouter);
app.use('/api/v1', UserRouter);
connectDB();

app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
});