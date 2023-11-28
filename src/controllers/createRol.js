const { Rol } = require("../db");


const createRolController = async(input)=>{
    const { id, type } = input;

    const existingRol = await Rol.findOne({where: { id }})

    if(!existingRol){
        await Rol.create({
            id,
            type
        })
    }

    return true
}

module.exports = createRolController