const {Type} = require('../models/models');
const ApiError = require('../error/ApiError');
const path = require('path');
const uuid = require('uuid');
class TypeController {
    async create(req,res){
        const {name} =req.body
        const {img} =req.files
        let fileName = uuid.v4()+'.jpg'
        img.mv(path.resolve(__dirname,'..','static',fileName))
        const type = await Type.create({name,img:fileName})
        return res.json(type)
    }
    async getAll(req,res){
        let {id} =req.body
        console.log(req.body)
        if (id) {
            const types = await Type.findAll({where:{id:id}})
            return res.json(types) 
        }
        if(!id){
        const types = await Type.findAll();
        return res.json(types)
        }   
    }
}

module.exports=new TypeController;