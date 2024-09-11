"use strict";

var _graphqlYoga = require("graphql-yoga");
var _resolvers = _interopRequireDefault(require("./graphql/resolvers"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// const { GraphQLServer, PubSub } = require("graphql-yoga");

// babeljs'yi kurduğumuz için import kısımlarını kullanabiliyoruz artık

// const resolvers = require("./graphql/resolvers");

var pubsub = new _graphqlYoga.PubSub();
var server = new _graphqlYoga.GraphQLServer({
  typeDefs: "".concat(__dirname, "/graphql/schema.graphql"),
  resolvers: _resolvers["default"],
  context: {
    pubsub: pubsub
  }
});
server.start(function () {
  return console.log("Server is running on localhost:4000 Time:".concat(new Date().toLocaleTimeString()));
});