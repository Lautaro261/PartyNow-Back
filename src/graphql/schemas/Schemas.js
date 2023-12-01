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

    # TYPE QUERY

    type Message{
        rols: String
        typeofplaces:String
        clients:String
        organizers:String
    }

    type Query {
        hello: String
    }

    #TYPE MUTATION
    type Mutation {
        #USUARIO
        databaseLoad(input: DatabaseLoad): Message
        createUser(input: UserInput): String
        createPlace(input: PlaceInput):String
    }
`;

module.exports = typeDefs;