const { Version } = require("../models/models");
const uuid = require('uuid');
const path = require('path');
class VersionController {
    async create(req,res){
        const {name} =req.body
        const {img} =req.files
        let fileName = uuid.v4()+'.jpg'
        img.mv(path.resolve(__dirname,'..','static',fileName))
        const version = await Version.create({name,img:fileName})
        return res.json(version)
        
    }
    async getAll(req,res){
            const versions = await Version.findAll();
            res.json(versions)
    }
}

module.exports=new VersionController;