const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");

// typeDefs
const typeDefs = gql `
    type Query {
        hello: String
    }
`;

// Resolvers
const resolvers = {
    Query:{
        hello: () => "servidor funcionando che :D"
    }
}

// Crear una función para configurar y devolver el servidor Apollo
function createApolloServer() {
    const server = new ApolloServer({ typeDefs, resolvers });
    return server;
}

// Crear una función para iniciar el servidor
function startServer(port) {
    const app = express();
    const server = createApolloServer();

    server.start().then(() => {
        server.applyMiddleware({ app });
        app.listen({ port }, () => {
            console.log(`Servidor Apollo escuchando en el puerto ${port}`);
        });
    });
}

module.exports = {
    startServer,
};

