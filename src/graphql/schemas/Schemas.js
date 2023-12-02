const { gql } = require("apollo-server-express");

const typeDefs = gql `
    #INPUT
    input DatabaseLoad {
        rols: Boolean!
        typeofplaces: Boolean
        clients: Boolean
        organizers: Boolean
    }

    input UserInput {
        email: String!
        password: String!
        rol: ID!
        name: String
    }

    input PlaceInput {
        email:String!
        typeOfPlace:ID!
        name:String!
        photo:String
        capacitance:Int
        addres:String!
        numeration:String!
        maps:String
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
    }

    # TYPE QUERY
    type Query {
        hello: String
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