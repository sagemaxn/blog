const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const morgan = require('morgan')
const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env'})

connectDB();

const app = express();

const port = process.env.PORT || 4000

const mongoose = require('mongoose');
//const { connect } = require('http2');

app.use(cors());
app.use(express.json())

const routes = require('./routes/index')

const adminRouter = require('./routes/admin');
const postRouter = require('./routes/post')

app.use('/admin', routes.admin);
app.use('/post', postRouter)

app.listen(port, (req, res) => {
    console.log(`The server is running on port ${port}`)
});

app.get('/',(req, res) => {
    res.send('hi')
})
