const { ApolloServer } = require("apollo-server");

const resolvers = require("./res");
const typeDefs = require("./schema");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(3000).then(() => {
  console.log("RUNING 😁");
});
