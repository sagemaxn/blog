const express = require('express')
const cors = require('cors')
const app = express();
require('dotenv').config();

const port = process.env.PORT || 4000

const mongoose = require('mongoose');
const { connect } = require('http2');

app.use(cors());
app.use(express.json())

const uri = process.env.DB_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, 'useUnifiedTopology': true}
    );

const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("MongoDB database connection established successfully")
})    

const routes = require('./routes/index')

const adminRouter = require('./routes/admin');
const postRouter = require('./routes/post')

console.log(routes)

app.use('/admin', routes.admin);
app.use('/post', postRouter)

app.listen(port, (req, res) => {
    console.log(`The server is running on port ${port}`)
});

app.get('/',(req, res) => {
    res.send('hi')
})

 
const userSchema = new mongoose.Schema(
    {
      text: {
        type: String,
        unique: true,
        required: true,
      },
    },
    { timestamps: true },
    { collection : 'post' }
  );
   
  const User = mongoose.model('post', userSchema);
