const sequelize = require('../db');
const {DataTypes} = require('sequelize')

const User = sequelize.define ('user',{
id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
login:{type:DataTypes.STRING,unique:true},
password:{type:DataTypes.STRING},
role:{type:DataTypes.STRING,defaultValue:'USER'}
})


const Chip = sequelize.define ('chip',{
   id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
   series:{type:DataTypes.STRING},
   coming:{type:DataTypes.INTEGER,defaultValue:0},
   consum:{type:DataTypes.INTEGER,defaultValue:0},
  
    })

    const Type = sequelize.define ('type',{
        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
        name:{type:DataTypes.STRING,unique:true},
        img: {type:DataTypes.STRING,allowNull:false}
        })
        const Version = sequelize.define ('version',{
            id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
            name:{type:DataTypes.STRING,unique:true},
            img: {type:DataTypes.STRING,allowNull:false}
            })
            const Defec= sequelize.define ('defec',{
                id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
                code:{type:DataTypes.INTEGER},
                value:{type:DataTypes.INTEGER},
                realValue:{type:DataTypes.INTEGER}
                })




// User.hasMany(Chip)
// Chip.belongsTo(User)

Type.hasMany(Chip)
Chip.belongsTo(Type)

Version.hasMany(Chip)
Chip.belongsTo(Version)

Type.hasMany(Version)
Version.belongsTo(Type)

Chip.hasMany(Defec,{as:'defect'})
Defec.belongsTo(Chip)



module.exports ={
    User,
    Type,Version,Chip,Defec
};