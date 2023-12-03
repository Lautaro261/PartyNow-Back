const rols = [
  {
    id: 1,
    type: "clients",
  },
  {
    id: 2,
    type: "organizer",
  },
  {
    id: 3,
    type: "superAdmin",
  },
  {
    id: 4,
    type: "security",
  },
];

const typeofplaces = [
  {
    id: 1,
    name: "public space",
  },
  {
    id: 2,
    name: "private space",
  },
];

const clients = [
  {
    rol: 1,
    username: "juan111",
    firstName: "Juan",
    password: "123456",
    email: "juan@gmail.com",
  },
  {
    rol: 1,
    username: "pedro222",
    firstName: "Pedro",
    password: "123456",
    email: "pedro@gmail.com",
  },
  {
    rol: 1,
    username: "maria333",
    firstName: "Maria",
    password: "123456",
    email: "maria@gmail.com",
  },
  {
    rol: 1,
    username: "luis444",
    firstName: "Luis",
    password: "123456",
    email: "luis@gmail.com",
  },
];

const organizers = [
  {
    rol: 2,
    username: "LaRoka",
    password: "123456",
    email: "laroka@gmail.com",
  },
  {
    rol: 2,
    username: "Babylon",
    password: "123456",
    email: "babylon@gmail.com",
  },
  {
    rol: 2,
    username: "OneSalta",
    password: "123456",
    email: "onesalta@gmail.com",
  },
  {
    rol: 2,
    username: "Bullet Salta",
    password: "123456",
    email: "bulletsalta@gmail.com",
  },
];

const places = [
  {
    username: "LaRoka",
    typeOfPlace: 2,
    nameOfPlace: "La Roka Disco",
    description: "La disco Más grande del norte argentino",
    country: "argentina",
    province: "salta",
    city: "salta",
    addres: "av. Mitre",
    numeration: "250",
    maps: "https://maps.app.goo.gl/RYdanXk5aBigfkGLA",
    longitude: "-65.427048",
    latitude: "-24.8207734",
    capacitance: 120,
    coverPhoto: "https://pbs.twimg.com/media/CoHROpsXgAAoLkF.jpg",
    profilePhoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1bxRsPxZ20mnILti8hMNJ4RwLyILrc-wrBA&usqp=CAU",
  },
  {
    username: "Babylon",
    typeOfPlace: 2,
    nameOfPlace: "Babylon Disc",
    description: "Las noches más divertidas!",
    country: "argentina",
    province: "salta",
    city: "salta",
    addres: "av. Falsa",
    numeration: "53",
    maps: "https://maps.app.goo.gl/RYdanXk5aBigfkGLA",
    longitude: "-65.427048",
    latitude: "-24.8207734",
    capacitance: 60,
    coverPhoto: "https://pbs.twimg.com/media/CoHROpsXgAAoLkF.jpg",
    profilePhoto:
      "https://res.cloudinary.com/do6zlglwn/image/upload/v1699918041/381757247_306941111983523_2951440615098080305_n_a5vrhp.jpg",
  },
  {
    username: "OneSalta",
    typeOfPlace: 2,
    nameOfPlace: "One Salta Disco",
    description: "El lugar del encuentro",
    country: "argentina",
    province: "salta",
    city: "salta",
    addres: "av. Liberdad",
    numeration: "420",
    maps: "https://maps.app.goo.gl/RYdanXk5aBigfkGLA",
    longitude: "-65.427048",
    latitude: "-24.8207734",
    capacitance: 200,
    coverPhoto:
      "https://res.cloudinary.com/do6zlglwn/image/upload/v1700590333/290910323_432699108865555_5023201351178018415_n_wrlgfo.jpg",
    profilePhoto:
      "https://res.cloudinary.com/do6zlglwn/image/upload/v1700590301/292218566_432699112198888_8111250833138957522_n_v1xwgo.jpg",
  },
];

const events = [{}];

module.exports = {
  rols,
  typeofplaces,
  clients,
  organizers,
  places
};
