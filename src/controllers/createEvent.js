const { Event, Series, User, Rol } = require("../db");

const createEventController = async(input)=>{
    const {
        title,
        email,
        description,
        date,
        time,
        capacitance,
        serietitle,
        quantity,
        price
    } = input

    const user = await User.findOne({
        where: { email },
        include: [
          {
            model: Rol,
            where: { id: 2 },
          },
        ],
      });
    
      if (!user) {
        throw new Error(
          `Error DEV: user ${email} does not have the role for the request`
        );
      }
      const { id } = user?.dataValues;


      const event = await Event.findOne({
        where: { 
            name: title,
            hour: time,
            userId: id
         },
      })

      if(event){
        throw new Error(`Error DEV: The event ${title} already exists`);
      }

      const newEvent = await Event.create({
        name: title,
        status: "approved",
        hour: time,
        description,
        userId: id
      })

      const newSerie = await Series.create({
        title: serietitle,
        price,
        quantity,
        stock: true,
        eventId: newEvent?.dataValues.id
      })

      return {
        newEvent,
        newSerie
    }

}

module.exports = createEventController