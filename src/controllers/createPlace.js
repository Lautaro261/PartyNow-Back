const { Place, Typeofplace, Location, User, Rol } = require("../db");

const createPlaceController = async (input) => {
  const {
    username,
    typeOfPlace,
    nameOfPlace,
    description,
    coverPhoto,
    profilePhoto,
    photos,
    capacitance,
    country,
    province,
    city,
    addres,
    numeration,
    maps,
    longitude,
    latitude
  } = input;

  const user = await User.findOne({
    where: { username },
    include: [
      {
        model: Rol,
        where: { id: 2 },
      },
    ],
  });

  if (!user) {
    throw new Error(
      `Error DEV: user ${username} does not have the role for the request`
    );
  }

  const { id } = user?.dataValues;
  const place = await Place.findOne({ where: { name: nameOfPlace } });

  if (place) {
    throw new Error(`Error DEV: The place ${nameOfPlace} already exists`);
  }

  const newLocation = await Location.create({
    country,
    province,
    city,
    addres,
    numeration,
    maps,
    longitude,
    latitude
  });

  const newPlace = await Place.create({
    name: nameOfPlace,
    description,
    profile_photo: profilePhoto,
    banner_photo: coverPhoto,
    photos,
    capacitance,
    typeofplaceId: typeOfPlace,
    userId: id,
    locationId: newLocation?.dataValues.id,
  });

  return newPlace;
};

module.exports = createPlaceController;
