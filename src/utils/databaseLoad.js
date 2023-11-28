const rols = [
    {
        id: 1,
        type: "clients"
    },
    {
        id: 2,
        type: "organizer"
    },
    {
        id: 3,
        type: "superAdmin"
    },
    {
        id: 4,
        type: "security"
    }

]

const typeofplaces = [
    {
        id: 1,
        name: "public space"
    },
    {
        id: 2,
        name: "private space"
    }
]

const clients = [
    {
        rol: 1,
        name: "juan",
        password: "123456",
        email: "juan@gmail.com"
    },
    {
        rol: 1,
        name: "pedro",
        password: "123456",
        email: "pedro@gmail.com"
    },
    {
        rol: 1,
        name: "maria",
        password: "123456",
        email: "maria@gmail.com"
    },
    {
        rol: 1,
        name: "luis",
        password: "123456",
        email: "luis@gmail.com"
    }
]

const organizers = [
    {
        rol: 2,
        name: "ana",
        password: "123456",
        email: "ana@gmail.com"
    },
    {
        rol: 2,
        name: "carlos",
        password: "123456",
        email: "carlos@gmail.com"
    },
    {
        rol: 2,
        name: "laura",
        password: "123456",
        email: "laura@gmail.com"
    },
    {
        rol: 2,
        name: "roberto",
        password: "123456",
        email: "roberto@gmail.com"
    }
]

const places = [
    {}
]

const events = [
    {}
]


module.exports = { 
    rols,
    typeofplaces,
    clients,
    organizers
}