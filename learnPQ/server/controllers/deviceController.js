
const uuid = require('uuid');
const path = require('path');
const {Device} = require('../models/models');
const ApiError = require('../error/ApiError');
const { off } = require('process');
const {DeviceInfo} = require('../models/models');
const { JSON } = require('sequelize');
class DeviceControler {

    async create (req,res,next){
        try {
            const {name,price,brandId,typeId,info} =req.body;
            const {img} = req.files;
            let fileName = uuid.v4()+'.jpeg';
            img.mv(path.resolve(__dirname,'..','static',fileName))
         
      
            const device = await Device.create({name,price,brandId,typeId,info,img:fileName})
            if (info) {
                info=JSON.parse(info);
              info.forEach(i => {
                  DeviceInfo.create({
                      title:i.title,
                      description: i.description,
                      deviceId:device.id
                  })
                    
                });
            }
            return res.json(device)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
     
    }

    async getAll (req,res){
        try {
            let {brandId,typeId,limit,page} =req.query;
            page=page||1;
            limit = limit||9;
            let offset = page*limit - limit;
            let devices;
            if (!brandId&&!typeId){
                devices= await Device.findAndCountAll({limit,offset})
            }
            if (brandId&&!typeId){
                devices= await Device.findAndCountAll({where:{brandId},limit,offset})
            }
            if (!brandId&&typeId){
                devices= await Device.findAll({where:{typeId},limit,offset})
            }
            if (brandId&&typeId){
                devices= await Device.findAll({where:{typeId,brandId},limit,offset})
            }
    
           return res.json(devices)
            
        } catch (error) {
            console.log(error.message)
        }
       
    }

    async getOne (req,res){
        const {id}=req.params;
        const device = await Device.findOne({
where:{id},
include :[{model:DeviceInfo,as:'info'}]

        })
       return res.json(device)
    }

   

}

module.exports = new DeviceControler()