const {Chip} = require('../models/models');
const ApiError = require('../error/ApiError');
const { nextTick } = require('process');
const {Defec} = require('../models/models');
const fs = require('fs');
class ChipController {
    async create(req,res,next){
        try {
      let {series,coming,consum,typeId,versionId,defec}=req.body
        fs.writeFileSync("hello.txt", defec)
        
       let chip = await Chip.create({series,coming,consum,typeId,versionId})
        if(defec) {
            defec=JSON.parse(defec)   
            defec.forEach(i=>
                Defec.create({
                    code:Number(i.code),
                    value:Number(i.value),
                    realValue:Number(i.realValue),
                    chipId:Number(chip.id)
                }))
        }
        res.json(chip)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
        
    }
    async getAll(req,res){
      let {typeId,versionId,limit,page} =req.query;
       page= page||1;
       limit=limit||9
       let offset = page*limit - limit
       let chips;
       if (!typeId&&!versionId){
        chips = await Chip.findAndCountAll({limit,offset})
           return res.json(chips)
       }
       if(!typeId &&versionId){
        chips = await Chip.findAndCountAll({where:{versionId},limit,offset})
        return res.json(chips)
       }
       if(typeId && !versionId) {
        chips = await Chip.findAndCountAll({where:{typeId},limit,offset})
        return res.json(chips)
       }
       if(typeId && versionId) {
        chips = await Chip.findAndCountAll({where:{typeId,brandId},limit,offset})
        return res.json(chips)
    }

    }
    async getOne(req,res){
        const {id} = req.params;
        let chip =await Chip.findOne({
            where:{id},
            include:[{model:Defec,as:'defect'}]
        });
        return res.json(chip)
        
    }
}

module.exports=new ChipController;