const { Place, Typeofplace, Location, User, Rol } = require("../db");

const createPlaceController = async (input) => {
  const {
    typeOfPlace,
    photo,
    name,
    addres,
    numeration,
    maps,
    capacitance,
    email,
  } = input;

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
  const place = await Place.findOne({ where: { name } });

  if (place) {
    throw new Error(`Error DEV: The place ${name} already exists`);
  }

  const newLocation = await Location.create({
    addres,
    numeration,
    maps,
  });

  const newPlace = await Place.create({
    name,
    photo,
    typeofplaceId: typeOfPlace,
    capacitance,
    userId: id,
    locationId: newLocation?.dataValues.id,
  });

  return newPlace;
};

module.exports = createPlaceController;
