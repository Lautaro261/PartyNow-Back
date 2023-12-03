const { Place, Typeofplace, Location, User} = require("../db");


const getAllPlacesController = async(input)=>{

    const places = await Place.findAll({
        attributes: ['id','name', 'profile_photo', 'banner_photo'],
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
              attributes: ['addres', 'numeration' ]
            },
            {
                model: User,
                attributes: ['username', 'verified']
              }
            ],
          order: [
              [User, 'verified', 'DESC']
          ]
          
    })
    //console.log(places)
    //console.log("aqui",places)

    const allplaces = places.map(place=>{
      //console.log(place?.dataValues.id)

      return { 
        localId: place?.dataValues.id,
        localName: place?.dataValues.name,
        nextDate: "20/12/2023",
        nextTime: "17:30-21:08",
        profilePhoto: place?.dataValues.profile_photo,
        coverPhoto: place?.dataValues.banner_photo,
        score: "4.9",
        organizer: place?.dataValues.user?.dataValues.username,
        verified: place?.dataValues.user?.dataValues.verified,
        type: "local"
      }
    })

    //console.log(allplaces)



    return allplaces

}

module.exports= getAllPlacesController