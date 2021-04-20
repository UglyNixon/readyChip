require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const PORT = process.env.PORT 
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const fileUpload = require('express-fileUpload');
const path = require('path');
const bcrypt = require('bcrypt');
const app=express();
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'static')))
app.use(fileUpload({}))
const models = require('./models/models');
app.use('/api',router)
//последний обработчик
app.use(errorHandler)
const start = async ()=>{

try {
    await sequelize.authenticate();
    await sequelize.sync( );
   
    app.listen(PORT,()=>{
      
        console.log(`server start on PORT ${PORT}`);
    })
} catch (e) {
    console.log('ошибка в Start')
    console.log(e)
}


}

start();