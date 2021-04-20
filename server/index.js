require('dotenv').config()
const sequelize = require('./db');
const models = require('./models/models');
const express = require('express');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/errorHandlingMiddleware');
const fileUpload = require('express-fileupload');
const path = require('path');

const app=express();


app.use(express.static(path.resolve(__dirname,'static')))
app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use('/api',router)


app.use(errorHandler)

const start = async ()=>{

try {
   await sequelize.authenticate()
  await sequelize.sync()
    app.listen(PORT,console.log('Server start on PORT:',PORT))
} catch (e) {
    console.log(e.message)
}

}

start();