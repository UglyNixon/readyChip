const {Chip} = require('../models/models');
const ApiError = require('../error/ApiError');
const { nextTick } = require('process');
const {Defec} = require('../models/models');
class ChipController {
    async create(req,res,next){
        try {
        const {series,coming,consum,typeId,versionId,defec}=req.body
        console.log(defec)
        const chip = await Chip.create({series,coming,consum,typeId,versionId})
        if(defec) {
            // defec=JSON.parse(defec)   исправить после client!!!! сейчас под postman [{},{} итд]
            defec.forEach(i=>
                Defec.create({
                    code:i.code,
                    value:i.value,
                    realValue:i.value,
                    chipId:chip.id
                }))
        }
        res.json(chip)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
        
    }
    async getAll(req,res){
       const {typeId,versionId,limit,page} =req.query;
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
        const chip =await Chip.findOne({
            where:{id},
            include:[{model:Defec,as:'defect'}]
        });
        return res.json(chip)
        
    }
}

module.exports=new ChipController;