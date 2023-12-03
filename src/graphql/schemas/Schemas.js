const { gql } = require("apollo-server-express");

const typeDefs = gql `
    #INPUT
    input DatabaseLoad {
        rols: Boolean!
        typeofplaces: Boolean
        clients: Boolean
        organizers: Boolean
        places: Boolean
    }

    input UserInput {
        email: String!
        password: String!
        rol: ID!
        username: String!
        profilePhoto: String
        coverPhoto: String
        firstName: String
        lastName: String
        dni: String
        phone: String
        birthday: String
    }

    input PlaceInput {
        username:String!
        typeOfPlace:ID!
        nameOfPlace:String!
        coverPhoto:String
        profilePhoto: String
        capacitance:Int
        country:String!
        province:String!
        city: String!
        addres:String!
        numeration:String!
        maps:String
        longitude:String
        latitude:String
    }

    input EventInput{
        email: String!
        place: ID
        title: String!
        description: String
        date: String
        time: String
        capacitance: Int
        serietitle: String!
        price: String!
        quantity: String!

    }

    #TYPES 
    type Message{
        rols: String
        typeofplaces:String
        clients:String
        organizers:String
        places: String
    }

    type Place{
        localId: ID
        localName: String
        nextDate: String
        nextTime: String
        coverPhoto: String
        profilePhoto: String
        score: String
        organizer: String
        verified: Boolean
        type: String
    }

    type PlaceCategory {
    category: String
    format: String
    places: [Place]
}

    # TYPE QUERY
    type Query {
        hello: String

        #SIN AUTENTIFICACION
        getAllplaces: [PlaceCategory]


        #CON AUTENTIFICACION
    }

    #TYPE MUTATION
    type Mutation {
        #SOLO DEVS
        databaseLoad(input: DatabaseLoad): Message

        #USUARIO
        createUser(input: UserInput): String

        #LUGARES
        createPlace(input: PlaceInput): String

        #EVENTOS
        createEvent(input: EventInput): String

        #TICKETS
    }
`;

module.exports = typeDefs;