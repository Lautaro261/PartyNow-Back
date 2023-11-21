const { gql } = require("apollo-server-express");

const typeDefs = gql `

    #INPUT
    input UserInput {
        name: String
        email: String!
        password: String!
    }

    # TYPE QUERY
    type Query {
        hello: String
    }

    #TYPE MUTATION
    type Mutation {
        #USUARIO
        createUser(input: UserInput): String
    }
`;

module.exports = typeDefs;