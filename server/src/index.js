
// const { GraphQLServer, PubSub } = require("graphql-yoga");

import { GraphQLServer, PubSub } from "graphql-yoga"; // babeljs'yi kurduğumuz için import kısımlarını kullanabiliyoruz artık


// const resolvers = require("./graphql/resolvers");

import resolvers from "./graphql/resolvers";


const pubsub = new PubSub();

const server = new GraphQLServer({ 
  typeDefs: `${__dirname}/graphql/schema.graphql`, 
  resolvers, 
  context: { pubsub }, 
});

server.start( () => console.log(`Server is running on localhost:4000 Time:${new Date().toLocaleTimeString()}`) );
  
