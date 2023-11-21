const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");
const typeDefs = require("./graphql/schemas/Schemas");
const resolvers = require("./graphql/resolvers/index");
const jwt = require("jsonwebtoken");



// Crear una función para configurar y devolver el servidor Apollo
function createApolloServer() {
    const server = new ApolloServer({ typeDefs, resolvers });
    return server;
}


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

