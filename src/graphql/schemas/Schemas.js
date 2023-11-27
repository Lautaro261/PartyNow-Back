const { gql } = require("apollo-server-express");

const typeDefs = gql `
    #INPUT
    input DatabaseLoad {
        rols: Boolean!
        typeofplaces: Boolean
        clients: Boolean
        organizer: Boolean
    }

    input UserInput {
        email: String!
        password: String!
        rol: ID!
        name: String
    }

    input PlaceInput {
        typeOfPlace:ID!
        name:String!
        photo:String
        capacitance:Int
        addres:String!
        numeration:String!
        map:String
    }

    # TYPE QUERY
    type Query {
        hello: String
    }

    #TYPE MUTATION
    type Mutation {
        #USUARIO
        databaseLoad(input: DatabaseLoad): String
        createUser(input: UserInput): String
        createPlace(input: PlaceInput):String
    }
`;

module.exports = typeDefs;