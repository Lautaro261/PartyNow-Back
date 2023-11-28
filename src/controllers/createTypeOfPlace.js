const { Typeofplace } = require("../db");

const createTypeOfPlaceController = async(input)=>{
    const { id, name } = input;

    const existingPlaceType = await Typeofplace.findOne({where: { id }})

    if(!existingPlaceType){
        await Typeofplace.create({
            id,
            name
        })
    }

    return true

}

module.exports = createTypeOfPlaceController