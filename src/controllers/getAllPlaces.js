const { Place, Typeofplace, Location, User} = require("../db");


const getAllPlacesController = async(input)=>{

    const places = await Place.findAll({
        attributes: ['name', 'photo'],
        where: {
            active: true
        },
        include: [
            {
              model: Typeofplace,
              attributes: ['name']
            },
            {
              model: Location,
              attributes: ['addres', 'numeration', 'maps', ]
            },
            {
                model: User,
                attributes: ['email', 'profile_photo']
              }
            ],
          order: [
              [User, 'verified', 'DESC']
          ]
          
    })
    //console.log(places)
    console.log("aqui",places[0]?.dataValues)

    return places

}

module.exports= getAllPlacesController