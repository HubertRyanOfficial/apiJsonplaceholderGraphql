const { ApolloServer } = require("apollo-server");

const res = require("./src/res");
const type = require("./src/schema");

const server = new ApolloServer({
  typeDefs: type,
  resolvers: res,
});

server.listen(4000).then(({ url }) => {
  console.log(`🚀 Server ready ${url}`);
});
